#ifndef MPU6050_ESP8266_H
#define MPU6050_ESP8266_H

#include "Arduino.h"
#include <Wire.h>


// MPU6050 配置寄存器地址
#define  MPU6050_REGISTER_SMPLRT_DIV     0x19
#define  MPU6050_REGISTER_USER_CTRL      0x6A
#define  MPU6050_REGISTER_PWR_MGMT_1     0x6B
#define  MPU6050_REGISTER_PWR_MGMT_2     0x6C
#define  MPU6050_REGISTER_CONFIG         0x1A
#define  MPU6050_REGISTER_GYRO_CONFIG    0x1B
#define  MPU6050_REGISTER_ACCEL_CONFIG   0x1C
#define  MPU6050_REGISTER_FIFO_EN        0x23
#define  MPU6050_REGISTER_INT_ENABLE     0x38
#define  MPU6050_REGISTER_ACCEL_XOUT_H   0x3B
#define  MPU6050_REGISTER_SIGNAL_PATH_RESET   0x68

// 数据表中提供的灵敏度比例系数分别为满刻度设置
#define  AccelScaleFactor	16384
#define  GyroScaleFactor	131
#define  MPU6050SlaveAddress   0x68

class MPU6050_ESP8266{
  public:
  	MPU6050_ESP8266();
  	float getTemp(){ return temp; };
    float getAccX(){ return accX; };
    float getAccY(){ return accY; };
    float getAccZ(){ return accZ; };
    float getAccAngleX(){ return angleAccX; };
    float getAccAngleY(){ return angleAccY; };
    float getAngleZ(){ return angleZ; };

  	void begin();
  	void I2C_Write(uint8_t regAddress, uint8_t data);
  	void update();

  private:
  	float temp, accX, accY, accZ, angleAccX, angleAccY, angleZ;

 };

#endif
