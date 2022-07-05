#include"RL_CH9329_Serial.h"


typedef struct
{
 uint8_t send_buf[64];   //发送数据缓冲区
  
}CH9329_Type;
CH9329_Type ch9329;



void RL_CH9329_Serial::SendData(uint8_t cmd,uint8_t len,uint8_t* data){

    ch9329.send_buf[0]=0x57;//帧头1
    ch9329.send_buf[1]=0xAB;//帧头2
    ch9329.send_buf[2]=0x00;//地址码 默认0x00
    ch9329.send_buf[3]=cmd;//命令字
    ch9329.send_buf[4]=len;//后续数据长度

    for(uint8_t i=0;i<len;i++){
    ch9329.send_buf[5+i] = data[i];
     }
      uint8_t check=0;//校验值
    for(uint8_t j=0;j<(len+5);j++){
    check += ch9329.send_buf[j];
    }
    ch9329.send_buf[5+len] = check;
    this->write(ch9329.send_buf,len+6); ; 

  }


size_t RL_CH9329_Serial::Keyboard_press(uint8_t k) {
  
     keys[0]=0;//组合键
     keys[1]=0;//保留
     
  if (keys[2] != k && keys[3] != k && keys[4] != k && keys[5] != k && keys[6] != k && keys[7] != k) {
    
    for (uint8_t i=2; i<8; i++) {
      if (keys[i] == 0x00) {
        keys[i] = k;
        break;
      }
    }

  }
  this->SendData(0x02,0x08,keys);
  return 1;
}

size_t RL_CH9329_Serial::Keyboard_release(uint8_t k) {
  
     keys[0]=0;//组合键
     keys[1]=0;//保留

    for (uint8_t i=2; i<8; i++) {
    if (0 != k && keys[i] == k) {
      keys[i] = 0x00;
    }
  }
  this->SendData(0x02,0x08,keys);
  return 1;
}

size_t RL_CH9329_Serial::Keyboard_release_all() {
  
    for (uint8_t i=0; i<8; i++) {
      keys[i] = 0x00;
    }  
  this->SendData(0x02,0x08,keys);
  return 1;
}

size_t RL_CH9329_Serial::Mouse_press(uint8_t k) {
  
     ms_rel[0]=0x01;//相对鼠标标志
     ms_rel[1]|=k;//鼠标按键
     ms_rel[2]=0;//x 横坐标 左右移动
     ms_rel[3]=0;//y 纵坐标 上下移动
     ms_rel[4]=0;//滚轮齿数

  this->SendData(0x05,0x05,ms_rel);
  return 1;
}
size_t RL_CH9329_Serial::Mouse_release(uint8_t k) {
  
     ms_rel[0]=0x01;//相对鼠标标志
     ms_rel[1]&=~k;//鼠标按键
     ms_rel[2]=0;//x 横坐标 左右移动
     ms_rel[3]=0;//y 纵坐标 上下移动
     ms_rel[4]=0;//滚轮齿数

  this->SendData(0x05,0x05,ms_rel);
  return 1;
}
size_t RL_CH9329_Serial::Mouse_release_all() {
  
     ms_rel[0]=0x01;//相对鼠标标志
     ms_rel[1]=0;//鼠标按键
     ms_rel[2]=0;//x 横坐标 左右移动
     ms_rel[3]=0;//y 纵坐标 上下移动
     ms_rel[4]=0;//滚轮齿数

  this->SendData(0x05,0x05,ms_rel);
  return 1;
}
