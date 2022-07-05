#ifndef _ADAFRUIT_ST7796_STM32H_
#define _ADAFRUIT_ST7796_STM32H_

#include "Adafruit_ST77xx.h"

// Some register settings
#define ST7796_MADCTL_BGR 0x08
#define ST7796_MADCTL_MH 0x04

#define ST7796_FRMCTR1 0xB1
#define ST7796_FRMCTR2 0xB2
#define ST7796_FRMCTR3 0xB3
#define ST7796_INVCTR 0xB4
#define ST7796_DISSET5 0xB6

#define ST7796_PWCTR1 0xC0
#define ST7796_PWCTR2 0xC1
#define ST7796_PWCTR3 0xC2
#define ST7796_PWCTR4 0xC3
#define ST7796_PWCTR5 0xC4
#define ST7796_VMCTR1 0xC5

#define ST7796_PWCTR6 0xFC

#define ST7796_GMCTRP1 0xE0
#define ST7796_GMCTRN1 0xE1

// Some ready-made 16-bit ('565') color settings:
#define ST7796_BLACK ST77XX_BLACK
#define ST7796_WHITE ST77XX_WHITE
#define ST7796_RED ST77XX_RED
#define ST7796_GREEN ST77XX_GREEN
#define ST7796_BLUE ST77XX_BLUE
#define ST7796_CYAN ST77XX_CYAN
#define ST7796_MAGENTA ST77XX_MAGENTA
#define ST7796_YELLOW ST77XX_YELLOW
#define ST7796_ORANGE ST77XX_ORANGE

#define ST7796_LCD_W  320
#define ST7796_LCD_H  480

/// Subclass of ST77XX type display for ST7789 TFT Driver
//Adafruit_ST7796继承自Adafruit_ST77xx
class Adafruit_ST7796_STM32 : public Adafruit_ST77xx {
public:
  Adafruit_ST7796_STM32(int8_t cs, int8_t dc, int8_t mosi, int8_t sclk,
                  int8_t rst = -1);
  Adafruit_ST7796_STM32(int8_t cs, int8_t dc, int8_t rst);
#if !defined(ESP8266)
  Adafruit_ST7796_STM32(SPIClass *spiClass, int8_t cs, int8_t dc, int8_t rst);
#endif // end !ESP8266

  void setRotation(uint8_t m);
  void init(void);

private:
  uint16_t windowWidth;
  uint16_t windowHeight;
};

#endif // _ADAFRUIT_ST7796H_