/*  MLX90615.cpp
	MLX90615读写驱动
	驱动使用：
	1、调用begin()函数初始化。
	2、调用getTemp()获取温度值。

	对EERPOM的写操作只能通过地址0(？），写之前要擦除
*/
#include "Wire.h"
#include "DuinoplusMLX90615.h"

MLX90615::MLX90615(MODE rwMode)
{

}

MLX90615::~MLX90615()
{

}

/* begin()
   设备初始化
   输入参数：
*/
void MLX90615::begin(void)
{
	Wire.begin();
	//Wire.setClock(50000); //IIC速度为50K
	device_addr = getAddr();
}

/* getAddr()
获得地址前，可能预先不知器件地址，所以用地址0获取设备地址
输入参数：
返回值：设备地址
*/
uint8_t  MLX90615::getAddr(void)
{
	uint8_t temp[2];
	device_addr = 0;        //从地址0读
	//device_addr = 0x5B;        //从地址0读
	read(ADDRESS, temp);
	device_addr = temp[0];
	return temp[0];
}

/* setAddr()
   设置地址，通过地址0设置
   输入参数：
   uint8_t dat_L：数据低字节
   uint8_t dat_H：数据高字节
*/
void  MLX90615::setAddr(uint8_t addr_L, uint8_t addr_H)
{
	write(ADDRESS, addr_L, addr_H);
	device_addr = addr_L; //保存读到的地址
}

/* getEmissivity()
   获取红外测温修正系数
   输入参数：
   返回值：修正系数
*/
float MLX90615::getEmissivity(void)   
{
	uint8_t temp[2];
	uint16_t tmp;
	float tmp1;

	read(EMISSIVITY, temp);
	//Serial.write(temp[0]);
	//Serial.write(temp[1]);
	tmp = temp[1];
	tmp = (tmp << 8) + temp[0];
	tmp1 = ((float)tmp) / 16384;
	return tmp1;
}

/* setEmissivity()
   设置红外测温修正系数
   输入参数：
     float e：修正系数
   返回值：
*/
void MLX90615::setEmissivity(float e)  
{
	uint8_t temp[2];
	uint16_t tmp;
	float tmp1 = e;

	tmp = tmp1 * 16384;
	temp[0] = (uint8_t)(tmp & 0xFF);
	temp[1] = (uint8_t)((tmp & 0xFF00) >> 8);
	//Serial.write(temp[0]);
	//Serial.write(temp[1]);
	write(EMISSIVITY, temp[0], temp[1]);
}

/* getPWM_T_min()
   获得最小温度值，只适用PWM方式
   输入参数：
   返回值：最小温度值 单位：度
*/
float  MLX90615::getPWM_T_min(void)
{
	uint8_t temp[2];
	uint16_t tmp;
	float tmp1;

	read(PWM_T_MIN, temp);
	//Serial.write(temp[0]);
	//Serial.write(temp[1]);
	tmp = temp[1];
	tmp = (tmp << 8) + temp[0];
	tmp1 = ((float)tmp)*0.02 - 273.15;
	return tmp1;
}

/* setPWM_T_min()
   设置最小温度值，只适用PWM方式
   输入参数：最小温度值 单位：度
   返回值：
*/
void      MLX90615::setPWM_T_min(float dat)
{
	uint8_t temp[2];
	uint16_t tmp;
	float tmp1 = dat;
	
	if (tmp1 == 0)
	{
		temp[0] = 0x5B;
		temp[1] = 035;
	}
	else
	{
		tmp = (tmp1 + 273.15) * 50;
		temp[0] = (uint8_t)(tmp & 0xFF);
		temp[1] = (uint8_t)((tmp & 0xFF00) >> 8);
	}
	//Serial.write(temp[0]);
	//Serial.write(temp[1]);
	write(PWM_T_MIN, temp[0], temp[1]);

	device_addr = temp[0];
}

/* getPWM_T_range()
   获得测温范围，只适用PWM方式
   输入参数：
   返回值：测温范围值 单位：度
*/
float  MLX90615::getPWM_T_range(void)
{
	uint8_t temp[2];
	uint16_t tmp;
	float tmp1;

	read(PWM_T_RANGE, temp);
	//Serial.write(temp[0]);
	//Serial.write(temp[1]);
	tmp = temp[1];
	tmp = (tmp << 8) + temp[0];
	tmp1 = ((float)tmp)*0.02;
	return tmp1;
}

/* setPWM_T_range()
   设置测温范围，只适用PWM方式
   输入参数：测温范围值 单位：度
   返回值：
*/
void MLX90615::setPWM_T_range(float dat)
{
	uint8_t temp[2];
	uint16_t tmp;
	float tmp1 = dat;

	tmp = tmp1 * 50;
	temp[0] = (uint8_t)(tmp & 0xFF);
	temp[1] = (uint8_t)((tmp & 0xFF00) >> 8);
	//Serial.write(temp[0]);
	//Serial.write(temp[1]);
	write(PWM_T_RANGE, temp[0], temp[1]);
}

/* setConfig()
设置config寄存器
配置前，应把原来的值读出，3-11位的工厂设置是不能修改的。
可选配置参数如下，各参数可或组合：
1、通信方式                     可选值： PWM（PWM 通信方式）  IIC（SMBus 通信方式）
2、PWM高低频选择                可选值： PWM_L 低频 PWM_H  高频
3、PWM通信方式下测温目标选择    可选值： PWM_TEMP_TA  芯片  PWM_TEMP_TO 被测物体
4、数字滤波参数选择             可选值： IIR_1 IIR_10 IIR_18  IIR_24 IIR_31 IIR_38 IIR_45
输入参数：寄存器值
返回值：
*/
void  MLX90615::setConfig(uint16_t dat)
{
	uint16_t configVal, tempVal;
	uint8_t temp[2];
	uint8_t i;

	configVal = getConfig();
	tempVal = configVal;  //保存好工厂设置
	tempVal &= 0x0FF8;
	for (i = 0; i < 16; i++)
	{
		if (dat & (1 << i))  //对dat按位测试，判断其为0还是1 
		{
			configVal |= (1 << i); //为1，把相应位置1
		}
		else
		{
			configVal &= ~((uint16_t)(1 << i));
		}			
	}
	configVal &= 0xF007;  //恢复工厂设置位，确保中厂设置不被修改
	configVal |= tempVal;
//	configVal |= 0x04E0;
	temp[0] = (uint8_t)(configVal & 0xFF);
	temp[1] = (uint8_t)((configVal & 0xFF00) >> 8);
	Serial.write(temp[0]);
	Serial.write(temp[1]);
	write(CONFIG, temp[0], temp[1]);
}

/* getConfig()
   设置config寄存器的值
   输入参数：
   返回值：寄存器值
*/
uint16_t MLX90615::getConfig(void)
{
	uint8_t temp[2];
	uint16_t tmp;

	read(CONFIG, temp);
	//Serial.write(temp[0]);
	//Serial.write(temp[1]);
	tmp = temp[1];
	tmp = (tmp << 8) + temp[0];
	return tmp;
}

/* getIIR()
   获取数字滤波值
   输入参数：
   返回值：数字滤波值
*/
uint8_t  MLX90615::getIIR(void)    
{

}

/* setIIR()
   设置数字滤波值
   输入参数：
    uint16_
   返回值：
*/
uint8_t  MLX90615::setIIR(uint16_t ) 
{

}

/* getID()
   获取产品ID号，共4字节
   返回值：ID号
*/
uint32_t MLX90615::getID(void)
{
	uint32_t id;

	return id;
}

/* getTemp()
   获得温度值，单位：度
   两种通信方式从设备读取温度值：IIC和PWM
   输入参数：
   uint8_t cmd：命令
   uint8_t dat_L：数据低字节
   uint8_t dat_H：数据高字节
*/
float MLX90615::getTemp(TEMP temp)
{
	uint16_t a;
	float tmp;
	uint8_t tmp1[2];

	if (rwMode == IIC_MODE)   //IIC通信方式
	{
		if (temp == OBJ_TEMP)
			read(TEMP_TO, tmp1);
		else if (temp == CHIP_TEMP)
			read(TEMP_TA, tmp1);
		//Serial.write(tmp1[0]);
		//Serial.write(tmp1[1]);
		a = tmp1[1];
		a = (a << 8) + tmp1[0];
		tmp = (float)a*0.02 - 273.15;
	}
	else if (rwMode == PWM_MODE) //PWM通雠方式
	{

	}

	return tmp;
}

/*  sleep()
    进入/退出睡眠模式
输入参数：
    boolean sleepFlag：模式选择
*/
void MLX90615::sleep(boolean sleepFlag)
{
	boolean flag = sleepFlag;
	if (flag == SLEEP_ON)  //进入睡眠
	{

	}
	else   //退出睡眠
	{

	}
}

/*  PWM2IIC() 
    PWM模式切换到IIC模式
    输入参数：
*/
void MLX90615::PWM2IIC(void)
{
	pinMode(A5, OUTPUT);
	digitalWrite(A5, HIGH);
	delay(1000);
	digitalWrite(A5, LOW);
	delay(30);
	digitalWrite(A5, HIGH);
	delay(200);
}
/* erase()
   擦除,EEPROM数据更新时，通常先要执行擦除操作,即先把要修改的字清0 
   输入参数：
   uint8_t cmd：擦除地址，对就相应命令
  */
void MLX90615::erase(uint8_t cmd)
{
	write(cmd, 0, 0); //通过写0擦除
	delay(200);
}

/* write()
   把数据写入EEPROM，RAM通常只读，所以不会用到本函数
   数据的写入格式参照datasheet的Bus Protocol一章
   输入参数：
     uint8_t cmd：命令
     uint8_t dat_L：数据低字节
     uint8_t dat_H：数据高字节
 */
void MLX90615::write(uint8_t cmd, uint8_t dat_L, uint8_t dat_H)
{
	uint8_t i;
	uint8_t buff[5];
	uint8_t tmp;

	tmp = device_addr;
	device_addr = 0; //擦、写操作只能通过地址0
	//Serial.println(device_addr);

	/*写之前先擦除*/
	buff[0] = device_addr;
	buff[1] = cmd;
	buff[2] = 0;   
	buff[3] = 0;
	buff[4] = crc8(buff, 4);

	Wire.beginTransmission(device_addr);
	Wire.write(cmd);
	Wire.write(0); //擦除就是写0
	Wire.write(0);
	Wire.write(buff[4]);
	Wire.endTransmission();   
	delay(1000); //注意加点延时，等待擦除完成
	/*擦除后写入数据*/
	buff[0] = device_addr;        
	buff[1] = cmd;
	buff[2] = dat_L;
	buff[3] = dat_H;
	buff[4] = crc8(buff, 4);
	//for (i = 0; i < 5; i++)   //测试
	//{
	//	Serial.write(buff[i]);
	//}
	Wire.beginTransmission(device_addr); 
	Wire.write(cmd);
	Wire.write(dat_L); 
	Wire.write(dat_H);          
	Wire.write(buff[4]);
	Wire.endTransmission();   
	delay(1000); //注意加点延时，等待写完成

	device_addr = tmp;
}

/* read()
   把数据从EEPRO或RAM中读出来，数据是16位的。
   输入参数：
     uint8_t cmd：命令地址
     uint8_t *buffer：读出数据缓存
*/
uint8_t MLX90615::read(uint8_t cmd, uint8_t *buffer)
{
	uint8_t buff[6];
	uint8_t i = 0;

	buff[0] = device_addr << 1;      
	buff[1] = cmd;
	buff[2] = (device_addr << 1) + 1;

	Wire.beginTransmission(device_addr); 
	Wire.write(cmd);
	Wire.endTransmission(0);    // stop transmitting

	Wire.requestFrom(device_addr, 3);    //从设备读3个字节，第1个字节为设备地址，第三个字节为CRC8校验。
	while (Wire.available()) {
		buff[i + 3] = Wire.read();       //设备地址码
		i++;
	}

	//for (i = 0; i < 6; i++)   //测试
	//{
	//	Serial.write(buff[i]);
	//}

	if (buff[5] == crc8(buff, 5)){
		*buffer = buff[3];
		*(buffer + 1) = buff[4];
		return 1;
	}
	else
		return 0;
}

/*  crc8()
    CRC8校验
    输入参数：
      uint8_t *buf：待校验数据缓存
      uint8_t len：待校验字节数
*/
uint8_t MLX90615::crc8(uint8_t *buf, uint8_t len)
{
	uint8_t i, l;
	uint16_t crc = 0;
	for (l = 0; l<len; l++)
	{
		crc ^= (buf[l] * 0x100);
		for (i = 0; i<8; i++)
		{
			if (crc & 0x8000)
			{
				crc ^= 0x8380;
			}
			crc *= 2;
		}
	}
	return(crc / 0x100);
}