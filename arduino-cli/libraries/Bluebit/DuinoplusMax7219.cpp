/*
 *    Max7219.cpp - A library for controling Leds with a MAX7219/MAX7221
 *    Copyright (c) 2007 Eberhard Fahle
 *    Max7219����
 *    7219����ԭ����
 *     1��spi���߷�ʽ����δ��MISO��
 *     2�������Դ��з�ʽ���������ȳ��ķ�ʽ�ڼ���оƬ���ƶ����������Ҫ�����ݵ���4��оƬ������4�����ݣ���3����Ϳղ����룬���������Ͳ�����4��оƬ��
 *     3��ÿ������Ϊ16λ����8λΪ�����룬��8λΪ���ݡ���λ��ǰ���䡣
 *     ����ʹ�ã�
 *     1��
 */


#include "DuinoplusMax7219.h"

//������ the opcodes for the MAX7221 and MAX7219
#define OP_NOOP   0
#define OP_DIGIT0 1
#define OP_DIGIT1 2
#define OP_DIGIT2 3
#define OP_DIGIT3 4
#define OP_DIGIT4 5
#define OP_DIGIT5 6
#define OP_DIGIT6 7
#define OP_DIGIT7 8
#define OP_DECODEMODE  9
#define OP_INTENSITY   10    //����
#define OP_SCANLIMIT   11
#define OP_SHUTDOWN    12
#define OP_DISPLAYTEST 15

Max7219::Max7219(int csPin, int dataPin, int clkPin, int numDevices) {
    SPI_MOSI=dataPin;
    SPI_CLK=clkPin;
    SPI_CS=csPin;
    maxDevices=numDevices;
    pinMode(SPI_MOSI,OUTPUT);
    pinMode(SPI_CLK,OUTPUT);
    pinMode(SPI_CS,OUTPUT);
    digitalWrite(SPI_CS,HIGH);
	for (int i = 0; i < maxDevices; i++){
		digitalWrite(SPI_CS, LOW); 
		for (int i = 0; i < maxDevices; i++){
			shiftOut(SPI_MOSI, SPI_CLK, MSBFIRST, OP_DISPLAYTEST); //����ָ���ʾ����
			shiftOut(SPI_MOSI, SPI_CLK, MSBFIRST, 0);
		}
		digitalWrite(SPI_CS, HIGH);
	}
	for (int i = 0; i < maxDevices; i++){
		digitalWrite(SPI_CS, LOW); 
		for (int i = 0; i < maxDevices; i++){
			shiftOut(SPI_MOSI, SPI_CLK, MSBFIRST, OP_DECODEMODE); //����ָ��
			shiftOut(SPI_MOSI, SPI_CLK, MSBFIRST, 0);    /*������ܶ����Ƿ�ʹ��CODE B���룬���ﲻ�ã����������ֶ�Ϊ0*/
		}
		digitalWrite(SPI_CS, HIGH);
	}
	setScanLimit(7);  /*�����λ�����ƣ�һ��оƬ�ɽ�8λ�����*/
    clearDisplay();
	shutdown(true);  /*�ر�*/
}

int Max7219::getDeviceCount() {
    return maxDevices;
}

void Max7219::shutdown(bool b) {
	uint8_t state;
	if(b)
        state = 0;
    else
        state = 1;
	
	digitalWrite(SPI_CS, LOW); 
		for (int i = 0; i < maxDevices; i++){
			shiftOut(SPI_MOSI, SPI_CLK, MSBFIRST, OP_SHUTDOWN); //����ָ��
			shiftOut(SPI_MOSI, SPI_CLK, MSBFIRST, state);
		}
	digitalWrite(SPI_CS, HIGH);
}

void Max7219::setScanLimit(int limit) {
    if(limit>=0 && limit<8){
		digitalWrite(SPI_CS, LOW); 
			for (int i = 0; i < maxDevices; i++){
				shiftOut(SPI_MOSI, SPI_CLK, MSBFIRST, OP_SCANLIMIT); //����ָ��
				shiftOut(SPI_MOSI, SPI_CLK, MSBFIRST, limit);
			}
		digitalWrite(SPI_CS, HIGH);		
	}
}

void Max7219::setIntensity(int intensity) {
    if(intensity>=0 && intensity<16){
		digitalWrite(SPI_CS, LOW); 
			for (int i = 0; i < maxDevices; i++){
				shiftOut(SPI_MOSI, SPI_CLK, MSBFIRST, OP_INTENSITY); //����ָ��
				shiftOut(SPI_MOSI, SPI_CLK, MSBFIRST, intensity);
			}
		digitalWrite(SPI_CS, HIGH);		
	}
}

/*clearDisplay()
	����
*/
void Max7219::clearDisplay(void) {
	int j;
	for (j = 0; j < 8; j++){
		//enable the line 
		digitalWrite(SPI_CS, LOW);
		//Now shift out the data 
		for (int i = 0; i < maxDevices; i++){
			shiftOut(SPI_MOSI, SPI_CLK, MSBFIRST, j + 1); //�������ݵ�ַָ��
			shiftOut(SPI_MOSI, SPI_CLK, MSBFIRST, 0);
		}
		//latch the data onto the display
		digitalWrite(SPI_CS, HIGH);
	}
}

/*setDigit()
	�����������ʾ����
	���������
		int addr��Ҫ�����ļ���оƬ��ַ
		int digit���ڼ�λ��һ��оƬ֧��8λ�����
		byte value������
		boolean dp���Ƿ���ʾС����
*/
 void Max7219::setDigit(int addr, int digit, byte value, boolean dp) {
    int offset;
    byte v;

    if(addr<0 || addr>=maxDevices)
        return;
    if(digit<0 || digit>7 || value>15)
        return;
    offset=addr*8;
    v=pgm_read_byte_near(charTable + value); 
    if(dp)
        v|=B10000000;
    status[offset+digit]=v;
    spiTransfer(addr, digit+1,v);
} 

 void Max7219::setChar(int addr, int digit, char value, boolean dp) {
    int offset;
    byte index,v;

    if(addr<0 || addr>=maxDevices)
        return;
    if(digit<0 || digit>7)
        return;
    offset=addr*8;
    index=(byte)value;
    if(index >127) {
        //no defined beyond index 127, so we use the space char
        index=32;
    }
    v=pgm_read_byte_near(charTable + index); 
    if(dp)
        v|=B10000000;
    status[offset+digit]=v;
    spiTransfer(addr, digit+1,v);
} 

/*update()
	�ѻ����������͵���Ļ��͸���ڵ���,�����С������ɺ͵������ֽ�һ����һ��оƬ8���ֽڣ�
	Ϊ���Ч�ʣ�һ��������оƬ��ͬһ��
*/
 void Max7219::update(byte *buff){
	int j;
	for (j = 0; j < 8; j++){
		//enable the line 
		digitalWrite(SPI_CS, LOW);
		//Now shift out the data 
		for (int i = 0; i < maxDevices; i++){
			shiftOut(SPI_MOSI, SPI_CLK, MSBFIRST, j + 1); //�������ݵ�ַָ��
			shiftOut(SPI_MOSI, SPI_CLK, MSBFIRST, *(buff + (maxDevices - 1) * 8 - i * 8 + j));
		}
		//latch the data onto the display
		digitalWrite(SPI_CS, HIGH);
	}
}

/*spiTransfer()
	����������оƬ��ĳ��оƬ����
    �����������������ʱ��ʹ�ã�����������Ч�ʽϵ�
	���������
		int addr��Ҫ�����ļ���оƬ��ַ
		volatile byte opcode��������
		volatile byte data������
*/
void Max7219::spiTransfer(int addr, volatile byte opcode, volatile byte data) {
	//Create an array with the data to shift out
	int offset = addr * 2;
	int maxbytes = maxDevices * 2;

	for (int i = 0; i<maxbytes; i++)
		spidata[i] = (byte)0;
	//put our device data into the array
	spidata[offset + 1] = opcode;
	spidata[offset] = data;
	//enable the line 
	digitalWrite(SPI_CS, LOW);
	//Now shift out the data 
	for (int i = maxbytes; i>0; i--)
		shiftOut(SPI_MOSI, SPI_CLK, MSBFIRST, spidata[i - 1]); /*�����ͼ���δβоƬ����*/
	//latch the data onto the display
	digitalWrite(SPI_CS, HIGH);
}
