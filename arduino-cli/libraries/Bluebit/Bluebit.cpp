/*
 bluebit.cpp
*/
#include <Wire.h>
#include "Bluebit.h"
/* #include <“Bluebit.h> */
#include <math.h>
#include <stdlib.h> //10进制转16进制需要sprintf函数

#define LCD1602_ADDR (24)
#define ULTRASONIC_ADDR (0x0b<<1)
#define TM1650_BASE_ADDR (0x34<<1)   
#define PCA9554_ADDR (0x20<<1)
#define COLOR_ADDR (0x0a<<1)
#define MIDI_ADDR  (0x0c<<1)
#define SHT20_ADDR (0x40<<1)
#define BH1750_ADDR (0x23<<1)
#define PCA9685_ADDR (0x41<<1)
#define HT16K33_ADDR (0x70<<1)

uint8_t rowOffsets[4] = {0x00, 0x40, 0x10, 0x50};

/* LM35 */
int get_ntcTemp(int pin)
{
	int Val;
	float tmp;
	Val = analogRead(pin);
	tmp = ((float)(1023-Val))/Val;
	tmp = log(tmp);
	tmp = 298.15*tmp + 3935;
	tmp = 1173220.25/tmp -273.15;  //298.15*3935 = 1173220.25

	return (int)tmp;
}

int get_lm35Temp(int pin)
{
    uint16_t val;
    double dat;
    val=analogRead(pin);
    dat = (double) val * (5/10.24);   //温度计算公式
    // Serial.print("Tep:"); 
    // Serial.print(dat);
    // Serial.println("C");
    // delay(500);

	return dat;
}

/*数字光线*/
uint16_t getAmbientLight(void)
{
	int i = 0;
	uint8_t temp[2];
	uint16_t dat;
	Wire.beginTransmission(0x23);              //传输给从机设备0x0B
	Wire.write(0x10);                             //发送1指令
	Wire.endTransmission();                    //结束传输
	delay(50);                                          
	Wire.requestFrom(0x23, 2);                 //接收从机设备0x0B，长度2字节
	while (Wire.available()) { 
		temp[i] = Wire.read();
		i++;
	}
	dat = temp[0];
    dat =  (dat<<8) + temp[1];
	delay(130);                                         //数字光线采集数据需用时120ms，给予130ms延时
	
	return dat;  
}

/*超声波*/
uint8_t Distance(void)
{
	int i = 0;
	uint8_t cm;
	uint8_t temp[2];
	Wire.beginTransmission(0x0b);              //传输给从机设备0x0B
	Wire.write(1);                             //发送1指令
	Wire.endTransmission();                    //结束传输
	Wire.requestFrom(0x0b, 2);                 //接收从机设备0x0B，长度2字节
	while (Wire.available()) { 
		temp[i] = Wire.read();
		i++;
	}
	return  cm = (temp[0] + temp[1] * 256) / 10;  
}

/*4 按键 */
// char get_joy_button(int pin)
// {
	// int val;
	// char btn;
	// val = analogRead(pin);
	// if (val<51)
        // btn ='A';
    // else if((val > 199) && (val < 301))
        // btn='B';
    // else if ((val > 449) && (val < 551))
        // btn='C';
    // else if((val > 699) && (val<801))
        // btn='D';
    // return btn;
// }
bool get_joy_button(int index, int pin)
{
	int val;
	int btn;
	val = analogRead(pin);
	if (val<51)
        btn =1; //A
    else if((val > 199) && (val < 301))
        btn=2; //B
    else if ((val > 449) && (val < 551))
        btn=3; //C
    else if((val > 699) && (val<801))
        btn=4; //D
    return btn == index;
}

/* 扩展端口 */
void extIOInit(byte pin, byte mode)    //设置IO引脚输入输出模式。mode=0，为输出模式，mode=1，为输入模式
{
	byte mode_old;
	Wire.beginTransmission(0x20);
	Wire.write(0x03);
	Wire.endTransmission();
	Wire.requestFrom(0x20, 1);
	while (Wire.available() > 0)
	{
		mode_old = Wire.read();
	}
	byte mode_new = 0;
	if (mode == 1)
	{
		mode_new = mode_old | (1 << pin);
	}
	else if (mode == 0)
	{
		mode_new = mode_old & (~(1 << pin));

	}
	byte cfg[2] = { 0x03, mode_new };
	Wire.beginTransmission(0x20);
	Wire.write(cfg, 2);
	Wire.endTransmission();

}

uint16_t readExtendedIO(byte pin)     //IO读函数
{
	byte dat[4];
	Wire.beginTransmission(0x20);
	Wire.write(0x00);
	Wire.endTransmission();
	Wire.requestFrom(0x20, 4);
	while (Wire.available() > 0)
	{
		Wire.readBytes(dat, 4);
	}
	return (dat[0] >> pin) & 0x01;

}

void writeExtendedIO(byte pin, byte value)   //IO写函数
{
	byte stat_old[3];
	Wire.beginTransmission(0x20);
	Wire.write(0x01);
	Wire.endTransmission();
	Wire.requestFrom(0x20, 3);
	while (Wire.available() > 0)
	{
		Wire.readBytes(stat_old, 3);
	}
	byte stat_new = 0;
	if (value == 1)
	{
		stat_new = stat_old[0] | (1 << pin);

	}
	else if (value == 0)
	{
		stat_new = stat_old[0] & (~(1 << pin));
	}

	byte cfg[2] = { 0x01, stat_new };

	Wire.beginTransmission(0x20);
	Wire.write(cfg, 2);
	Wire.endTransmission();

}

//读I2C设备(带拨码的)
float readCodesI2C(int address)
{
	Wire.begin();        // join i2c bus (address optional for master)
    Serial.begin(9600);  // start serial for output
	int reading = 0;
	
    Wire.requestFrom(address, 2); 
    if (2 <= Wire.available())
    {
    reading = Wire.read();  // receive high byte (overwrites previous reading)
    reading = reading << 8;    // shift high byte to be high 8 bits
    reading |= Wire.read(); // receive low byte as lower 8 bits
    //Serial.println(reading);   // print the reading
    }
   delay(100);
    
	return reading;
}

//光电门
double readPhotoelectricGate(int address)
{
  int reading = 0;
  int reading0 = 0;
  int reading1 = 0;
  int reading2 = 0;
  int reading3 = 0;
  int reading4 = 0;
  unsigned long n1;
  unsigned long n2;
  unsigned long n3;
  unsigned long n4;
  double timeStamp;
  
  Wire.begin();        // join i2c bus (address optional for master)
  Serial.begin(9600);  // start serial for output
  
  Wire.requestFrom(address, 5); 
  if (5 <= Wire.available())
  {
       reading0 = Wire.read();
       reading1 = Wire.read();
       reading2 = Wire.read();
       reading3 = Wire.read();
       reading4 = Wire.read();

       Serial.println(reading0); 
       Serial.println(reading1); 
       Serial.println(reading2); 
       Serial.println(reading3); 
       Serial.println(reading4);    

	   n1 = (reading1)*256*256*256;
	   n2 = (reading2)*256*256;
	   n3 = (reading3)*256;
	   n4 =  reading4;
	   timeStamp = (n1+n2+n3+n4)/100000;
	   Serial.println(timeStamp); 
  }
  delay(100);
  return timeStamp;
  //返回时差
  //reading1、2、3、4为10进制，先转为16进制后拼接起来再除以100000，单位秒，比如得到2C E9 47 2B拼完是753485611，除以 100000，即7534.85611秒，两次时间相减即得时差。
  // 思路1：(0X2CE9472B)
   // 思路2：(0X2C)*256*256*256
   //              (0XE9)*256*256
}

//编码电机
/*void MotorSetSpeed(int address,int speedH,int speedL)
{
  Wire.beginTransmission(address);   //ransmit to device #17 (0x11)
  Wire.write(byte(0x06));       //写速度寄存器地址
  //Wire.write(byte(0x03));       //向速度寄存器地址写编码电机转速 高位
  Wire.write(byte(speedH));          //向速度寄存器地址写编码电机转速 高位
  Wire.endTransmission();      
  delay(10);

  Wire.beginTransmission(address);   //ransmit to device #17 (0x11)
  Wire.write(byte(0x07));       //写速度寄存器地址
  Wire.write(byte(speedL));       //向速度寄存器地址写编码电机转速  低位
  Wire.endTransmission(10);       // stop transmitting  
  delay(10);
  
  Wire.beginTransmission(address);   //ransmit to device #17 (0x11)
  Wire.write(byte(0x00));       //向模式寄存器写编码电机模式
  Wire.write(byte(0x01));       //向模式寄存器写编码电机模式
  Wire.endTransmission();       // stop transmitting
  delay(10);
}*/

//编码电机
void MotorSetSpeed(int address,int value)
{
	Wire.begin();   //保留这个，外部自己选波特率
	//Serial.begin(9600);
	
	value = short(value);
	//int b0;
	int b1;
	int b2;
	/*if (value < -1024) value = -1024;
	if (value > 1024) value = 1024;
	if (value < 0){ 
		value = - value; 
		b0 = value / 256; 
		b1 = b0 + 128; 
		b2 = value - b0 * 256; 
	} else {
		b1 = value / 256; 
		b2 = value - b1 * 256; 			
	}*/
	if (value < -1024) value = -1024;
	else if (value > 1024) value = 1024;

	if (value < 0)	value += 65536;
	b1 = value / 256; 
	b2 = value % 256;

	Wire.beginTransmission(address);   //ransmit to device #17 (0x11)
	Wire.write(byte(0x06));       //写速度寄存器地址
	Wire.write(byte(b1));          //向速度寄存器地址写编码电机转速 高位
	Wire.endTransmission();      
	delay(10);
	Serial.println(byte(b1)); 

	Wire.beginTransmission(address);   //ransmit to device #17 (0x11)
	Wire.write(byte(0x07));       //写速度寄存器地址
	Wire.write(byte(b2));       //向速度寄存器地址写编码电机转速  低位
	Wire.endTransmission(10);       // stop transmitting  
	delay(10);
	Serial.println(byte(b2));
	
	Wire.beginTransmission(address);   //ransmit to device #17 (0x11)
	Wire.write(byte(0x00));       //向模式寄存器写编码电机模式
	Wire.write(byte(0x01));       //向模式寄存器写编码电机模式
	Wire.endTransmission();       // stop transmitting
	delay(10);
}





