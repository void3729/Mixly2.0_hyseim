#include "Adafruit_ST7796_STM32.h"
#include "Adafruit_ST77xx.h"

// CONSTRUCTORS ************************************************************

/*!
    @brief  Instantiate Adafruit ST7789 driver with software SPI
    @param  cs    Chip select pin #
    @param  dc    Data/Command pin #
    @param  mosi  SPI MOSI pin #
    @param  sclk  SPI Clock pin #
    @param  rst   Reset pin # (optional, pass -1 if unused)
*/
Adafruit_ST7796_STM32::Adafruit_ST7796_STM32(int8_t cs, int8_t dc, int8_t mosi, int8_t sclk,
                                 int8_t rst)
    : Adafruit_ST77xx(320, 480, cs, dc, mosi, sclk, rst) {}

/*!
    @brief  Instantiate Adafruit ST7789 driver with hardware SPI
    @param  cs   Chip select pin #
    @param  dc   Data/Command pin #
    @param  rst  Reset pin # (optional, pass -1 if unused)
*/
Adafruit_ST7796_STM32::Adafruit_ST7796_STM32(int8_t cs, int8_t dc, int8_t rst)
    : Adafruit_ST77xx(320, 480, cs, dc, rst) {}

#if !defined(ESP8266)
/*!
    @brief  Instantiate Adafruit ST7789 driver with selectable hardware SPI
    @param  spiClass  Pointer to an SPI device to use (e.g. &SPI1)
    @param  cs        Chip select pin #
    @param  dc        Data/Command pin #
    @param  rst       Reset pin # (optional, pass -1 if unused)
*/
Adafruit_ST7796_STM32::Adafruit_ST7796_STM32(SPIClass *spiClass, int8_t cs, int8_t dc,
                                 int8_t rst)
    : Adafruit_ST77xx(320, 480, spiClass, cs, dc, rst) {}
#endif // end !ESP8266

// SCREEN INITIALIZATION ***************************************************

// Rather than a bazillion writecommand() and writedata() calls, screen
// initialization commands and arguments are organized in these tables
// stored in PROGMEM.  The table may look bulky, but that's mostly the
// formatting -- storage-wise this is hundreds of bytes more compact
// than the equivalent code.  Companion function follows.

// clang-format off

static const uint8_t PROGMEM
  Rcmd1[] = {                       // ST7796S init, part 1 (red or green tab)
    15,                             // 15条命令
    0xF0,   1, //  1
      0xC3, 
    0xF0,   1, //  2
      0x96, 
    0x36,   1, //  3
      0x68, 
    0x3A,   1, //  4
      0x05, 
    0xB0,   1, //  5
      0x80, 
    0xB6,   2, //  6
      0x00, 0x02,
    0xB5,   4, //  7
      0x02, 0x03, 0x00, 0x04,
    0xB1,   2, //  8
      0x80, 0x10,
    0xB4,   1, //  9
      0x00, 
    0xB7,   1, //  10
      0xC6,
    0xC5,   1, //  11
      0x24,
    0xE4,   1, //  12
      0x31,
    0xE8,   8, //  13
      0x40, 0x8A, 0x00, 0x00,
      0x29, 0x19, 0xA5, 0x33,
    0xC2,   ST_CMD_DELAY, //  14
      255, 
    0xA7,   ST_CMD_DELAY, //  15
      255,
    },                       //     16-bit color

  Rcmd2green480x320[] = {            // 7735R init, part 2 (mini 160x80)
    2,                              //  2 commands in list:
    ST77XX_CASET,   4,              //  1: Column addr set, 4 args, no delay:
      0x00, 0x00,                   //     XSTART = 0
      ST7796_LCD_W>>8, ST7796_LCD_W&0xFF,                   //     XEND = 79
    ST77XX_RASET,   4,              //  2: Row addr set, 4 args, no delay:
      0x00, 0x00,                   //     XSTART = 0
      ST7796_LCD_H>>8, ST7796_LCD_H&0xFF },                 //     XEND = 159

  Rcmd3[] = {                       // 7735R init, part 3 (red or green tab)
    8,                              //  4 commands in list:
    ST7796_GMCTRP1, 14      ,       //  1: Gamma Adjustments (pos. polarity), 16 args + delay:
      0xF0, 0x09, 0x13, 0x12,       //     (Not entirely necessary, but provides
      0x12, 0x2B, 0x3C, 0x44,       //      accurate colors)
      0x4B, 0x1B, 0x18, 0x17,
      0x1D, 0x21,
    ST7796_GMCTRN1, 14      ,       //  2: Gamma Adjustments (neg. polarity), 16 args + delay:
      0xF0, 0x09, 0x13, 0x0C,       //     (Not entirely necessary, but provides
      0x0D, 0x27, 0x3B, 0x44,       //      accurate colors)
      0x4D, 0x0B, 0x17, 0x17,
      0x1D, 0x21, 
    0X36,     1,                     //  3: Normal display on, no args, w/delay
      0xEC,  
    0xF0,     1,                     //  4: Normal display on, no args, w/delay
      0xC3,  
    0xF0,     1,                    //  5: Normal display on, no args, w/delay
      0x69,  
    ST77XX_NORON,     ST_CMD_DELAY, //  6: Normal display on, no args, w/delay
      10,                           //     10 ms delay
    ST77XX_SLPOUT,    ST_CMD_DELAY, //  7.
      10,
    ST77XX_DISPON,    ST_CMD_DELAY, //  8: Main screen turn on, no args w/delay
      100 };                        //     100 ms delay
// clang-format on

/**************************************************************************/
/*!
    @brief  Initialization code common to all ST7789 displays
    @param  width  Display width
    @param  height Display height
    @param  mode   SPI data mode; one of SPI_MODE0, SPI_MODE1, SPI_MODE2
                   or SPI_MODE3 (do NOT pass the numbers 0,1,2 or 3 -- use
                   the defines only, the values are NOT the same!)
*/
/**************************************************************************/
void Adafruit_ST7796_STM32::init(void) {
    commonInit(Rcmd1);
    _height = ST7796_LCD_W;
    _width = ST7796_LCD_H;
    _colstart = 0;
    _rowstart = 0; 

    displayInit(Rcmd2green480x320);
    
    displayInit(Rcmd3);

    setRotation(0);
}

/**************************************************************************/
/*!
    @brief  Set origin of (0,0) and orientation of TFT display
    @param  m  The index for rotation, from 0-3 inclusive
*/
/**************************************************************************/
void Adafruit_ST7796_STM32::setRotation(uint8_t m) {
  uint8_t madctl = 0;

  rotation = m & 3; // can't be higher than 3

  switch (rotation) {
  case 0:
    madctl = (1<<3)|(1<<6);
    _height = ST7796_LCD_H;
    _width = ST7796_LCD_W;
    _xstart = _colstart;
    _ystart = _rowstart;
    break;
  case 1:
    madctl = (1<<3)|(1<<5);
    _width = ST7796_LCD_H;
    _height = ST7796_LCD_W;
    _ystart = _colstart;
    _xstart = _rowstart;
    break;
  case 2:
    madctl = (1<<3)|(1<<7);
    _height = ST7796_LCD_H;
    _width = ST7796_LCD_W;
    _xstart = _colstart;
    _ystart = _rowstart;
    break;
  case 3:
    madctl = (1<<3)|(1<<7)|(1<<6)|(1<<5);
    _width = ST7796_LCD_H;
    _height = ST7796_LCD_W;
    _ystart = _colstart;
    _xstart = _rowstart;
    break;
  }

  sendCommand(ST77XX_MADCTL, &madctl, 1);//设置屏幕旋转方向
}
