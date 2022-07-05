#include"RL_Voice68.h"

 VOICE_68::VOICE_68(uint8_t pin){

  _pin=pin;
  
  }

void VOICE_68::begin(){
  
   pinMode(_pin, OUTPUT);
  
  }


void VOICE_68::send_data(uint8_t addr)
{ int i; digitalWrite(_pin , LOW);
  delay(3); //>2ms
  for (i = 0; i < 8; i++)
  { digitalWrite(_pin, HIGH);
    if (addr & 1) {
      delayMicroseconds(2400); //>2400us
      digitalWrite(_pin, LOW);
      delayMicroseconds(800);
    } //>800us
    else {
      delayMicroseconds(800); //>800us
      digitalWrite(_pin , LOW);
      delayMicroseconds(2400);
    } //>2400us
    addr >>= 1;
  } //地址值右移一位
  digitalWrite(_pin, HIGH);
}

void VOICE_68::set_volume(uint8_t addr){//0Xe0-e7
  delay(100);
  send_data(0Xe0+addr); 
  }


void VOICE_68::set_cycle(){//0XF2
  delay(100);
  send_data(0XF2);
  
  } 
  
void VOICE_68::set_stop(){//0XFE
  delay(100);
  send_data(0XFE);
  
  } 
  
void VOICE_68::broadcast_num(uint8_t x) {
  if (x == 0) {
    send_data(0x2C); 
    delay(200);
  } 
  else  {
    send_data(0x22+x); 
    delay(200);
  } 
}

void VOICE_68::broadcast_int(uint16_t x){
  uint8_t ge,shi,bai,qian;

  qian = x / 1000;
  bai =  ((x / 100)) % (10);
  shi =  ((x) %  (100)) / 10;
  ge = (x) %  (10);
  if (qian) {
    broadcast_num(qian);
    send_data(0x20); 
    delay(200);
  }
  if (bai) {
    broadcast_num(bai);
    send_data(0x21); 
    delay(200);
  }
  if (shi) {
    broadcast_num(shi);
    send_data(0x22); 
    delay(200);
  }
  broadcast_num(ge);
  delay(1000);
  
}

void VOICE_68::broadcast_float(float y){
  uint8_t ge,shi,bai,qian,xiaoshu1,xiaoshu2;
  int16_t zhengshu,xiaoshu;

  zhengshu=(int)y; 
  xiaoshu=(int)((y-zhengshu)*100);//放大100倍
    // Serial.println(xiaoshu);

  qian = zhengshu / 1000;
  bai =  ((zhengshu / 100)) % (10);
  shi =  ((zhengshu) %  (100)) / 10;
  ge = (zhengshu) %  (10);

  xiaoshu1=(xiaoshu) /10;
  xiaoshu2=(xiaoshu) % 10;
  
  if (qian) {
    broadcast_num(qian);
    send_data(0x20); 
    delay(200);
  }
  if (bai) {
    broadcast_num(bai);
    send_data(0x21); 
    delay(200);
  }
  if (shi) {
    broadcast_num(shi);
    send_data(0x22); 
    delay(200);
  }
  broadcast_num(ge);
  delay(200);

  if(xiaoshu1|xiaoshu2){
     send_data(0x1d); 
     delay(200);
     broadcast_num(xiaoshu1);
     delay(200);
     broadcast_num(xiaoshu2);
     delay(200);
    }
    
  
}
