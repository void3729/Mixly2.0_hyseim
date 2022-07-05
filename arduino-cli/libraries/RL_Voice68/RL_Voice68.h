#ifndef _RL_VOICE_68_H_
#define _RL_VOICE_68_H_


#include "Arduino.h"

class VOICE_68 {
  public:

       VOICE_68(uint8_t pin);
  void begin();
  void send_data(uint8_t addr);
  void set_volume(uint8_t addr);
  void set_cycle();
  void set_stop();
  void broadcast_num(uint8_t x);
  void broadcast_int(uint16_t x);
  void broadcast_float(float y);
  private:

  uint8_t _pin;

};




#endif
