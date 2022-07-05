#ifndef _RL_N910X_H_
#define _RL_N910X_H_


#include "Arduino.h"

class N910X {
  public:

       N910X(uint8_t pin);
  void begin();//初始化管脚
  void send_data(uint8_t addr);//发送数据指令
  void set_play_number(uint8_t addr);//播放第x曲目 1-207
  void set_volume(uint8_t addr);//设置音量 0-30
  void set_usb_flash();//切换到 U盘
  void set_sd();//切换到 SD
  void set_mp3();//切换到  MP3模式
  void set_flash();//切换到flash模式
  void set_eq();//切换到NORMAL—POP—ROCK—JAZZ--CLASSIC
  void cycle_all();//全部循环
  void cycle_single();//单曲循环
  void play_up();//播放上一曲
  void play_down();//播放下一曲
  void play();//播放
  void pause();//暂停
  void stop();//停止
  private:

  uint8_t _pin;

};




#endif
