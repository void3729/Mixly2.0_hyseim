#include"N910X.h"

 N910X::N910X(uint8_t pin){

  _pin=pin;
  
  }

void N910X::begin(){
  
   pinMode(_pin, OUTPUT);
  
  }


void N910X::send_data(uint8_t addr)
{ int i; digitalWrite(_pin , LOW);
  delay(3); //>2ms
  for (i = 0; i < 8; i++)
  { digitalWrite(_pin, HIGH);
    if (addr & 1) {
      delayMicroseconds(1200); //>1200us
      digitalWrite(_pin, LOW);
      delayMicroseconds(400);//>400us
    } 
    else {
      delayMicroseconds(400); //>400us
      digitalWrite(_pin , LOW);
      delayMicroseconds(1200);//>1200us
    } 
    addr >>= 1;
  } //地址值右移一位
  digitalWrite(_pin, HIGH);
}

void N910X::set_play_number(uint8_t addr){//0X01~0XCF 播放具体曲目 1-207
  delay(100);
  send_data(addr);  
  }  

void N910X::set_volume(uint8_t addr){//0XD2-F0  0~30
  delay(100);
  send_data(0XD2+addr); 
  }

void N910X::set_usb_flash(){//0XF1 切换到U盘
  delay(100);
  send_data(0XF1);
  } 
  
void N910X::set_sd(){//0XF2 切换到SD
  delay(100);
  send_data(0XF2);
  } 
void N910X::set_mp3(){//0XF3 切换到mp3
  delay(100);
  send_data(0XF3);
  }   
void N910X::set_flash(){//0XF4 切换到flash模式
  delay(100);
  send_data(0XF4);
  }   
void N910X::set_eq(){//0XF5 切换到NORMAL—POP—ROCK—JAZZ--CLASSIC
  delay(100);
  send_data(0XF5);
  }    
void N910X::cycle_all(){//0XF6 全部循环
  delay(100);
  send_data(0XF6);  
  } 

void N910X::cycle_single(){//0XF7 单曲循环
  delay(100);
  send_data(0XF7);  
  } 

void N910X::play_up(){//0XF8 上一曲
  delay(100);
  send_data(0XF8);  
  } 
void N910X::play_down(){//0XF9 下一曲
  delay(100);
  send_data(0XF9);  
  }  
void N910X::play(){//0XFA 播放
  delay(100);
  send_data(0XFA);  
  }  
void N910X::pause(){//0XFB 暂停
  delay(100);
  send_data(0XFB);  
  }     
void N910X::stop(){//0XFC 停止
  delay(100);
  send_data(0XFC); 
  } 
  
