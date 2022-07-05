#include "MPU6050_ESP8266.h"

MPU6050_ESP8266::MPU6050_ESP8266(){
  Wire.begin();
}

void MPU6050_ESP8266::I2C_Write(uint8_t regAddress, uint8_t data){
  Wire.beginTransmission(MPU6050SlaveAddress);
  Wire.write(regAddress);
  Wire.write(data);
  Wire.endTransmission();
}

//初始化 MPU6050
void MPU6050_ESP8266::begin(){
  I2C_Write(MPU6050_REGISTER_SMPLRT_DIV, 0x07);
  I2C_Write(MPU6050_REGISTER_PWR_MGMT_1, 0x01);
  I2C_Write(MPU6050_REGISTER_PWR_MGMT_2, 0x00);
  I2C_Write(MPU6050_REGISTER_CONFIG, 0x00);
  I2C_Write(MPU6050_REGISTER_GYRO_CONFIG, 0x00);//set +/-250 degree/second full scale
  I2C_Write(MPU6050_REGISTER_ACCEL_CONFIG, 0x00);// set +/- 2g full scale
  I2C_Write(MPU6050_REGISTER_FIFO_EN, 0x00);
  I2C_Write(MPU6050_REGISTER_INT_ENABLE, 0x01);
  I2C_Write(MPU6050_REGISTER_SIGNAL_PATH_RESET, 0x00);
  I2C_Write(MPU6050_REGISTER_USER_CTRL, 0x00);
}

// 更新数据
void MPU6050_ESP8266::update(){
  Wire.beginTransmission(MPU6050SlaveAddress);
  Wire.write(MPU6050_REGISTER_ACCEL_XOUT_H);
  Wire.endTransmission();
  Wire.requestFrom(MPU6050SlaveAddress, (uint8_t)14);

  int16_t AccelX, AccelY, AccelZ, Temperature, GyroX, GyroY, GyroZ;

  AccelX = (((int16_t)Wire.read()<<8) | Wire.read());
  AccelY = (((int16_t)Wire.read()<<8) | Wire.read());
  AccelZ = (((int16_t)Wire.read()<<8) | Wire.read());
  Temperature = (((int16_t)Wire.read()<<8) | Wire.read());
  GyroX = (((int16_t)Wire.read()<<8) | Wire.read());
  GyroY = (((int16_t)Wire.read()<<8) | Wire.read());
  GyroZ = (((int16_t)Wire.read()<<8) | Wire.read());

  angleAccX = (double)AccelX/AccelScaleFactor*100;
  angleAccY = (double)AccelY/AccelScaleFactor*100;
  angleZ = (double)AccelZ/AccelScaleFactor*100;
  temp = (double)Temperature/340+36.53; //温度公式
  accX = (double)GyroX/GyroScaleFactor;
  accY = (double)GyroY/GyroScaleFactor;
  accZ = (double)GyroZ/GyroScaleFactor;
}





