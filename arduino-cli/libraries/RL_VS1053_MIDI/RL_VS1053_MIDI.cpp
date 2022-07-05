#include "RL_VS1053_MIDI.h"


//Plays a MIDI note. Doesn't check to see that cmd is greater than 127, or that data values are less than 127
void RL_VS1053_MIDI::talkMIDI(byte cmd, byte data1, byte data2) {
  this->write(cmd);
  this->write(data1);
  //Some commands only have one data byte. All cmds less than 0xBn have 2 data bytes 
  //(sort of: http://253.ccarh.org/handout/midiprotocol/)
  if( (cmd & 0xF0) <= 0xB0)
  this->write(data2);
}


//Send a MIDI note-on message.  Like pressing a piano key
//channel ranges from 0-15
void RL_VS1053_MIDI::noteOn(byte channel, byte note, byte attack_velocity) {
  this->talkMIDI( (0x90 | channel), note, attack_velocity);
}

//Send a MIDI note-off message.  Like releasing a piano key
void RL_VS1053_MIDI::noteOff(byte channel, byte note, byte release_velocity) {
  this->talkMIDI( (0x80 | channel), note, release_velocity);
}

//Send a MIDI Aftertouch message.   pressure can be applied to it
void RL_VS1053_MIDI::Aftertouch(byte channel, byte note, byte  pressure_amount) {
  this->talkMIDI( (0xA0 | channel), note, pressure_amount);
}

//Send a MIDI Control_Change message.   Sets a particular controller's value
void RL_VS1053_MIDI::Control_Change(byte channel, byte control_assected, byte  control_set) {
  this->talkMIDI( (0xB0 | channel), control_assected, control_set);
}


//Send a MIDI Program_Change message.   To cause the MIDI device to change to a particular Program (which some devices refer to as Patch, or Instrument, or Preset, or whatever).
void RL_VS1053_MIDI::Program_Change(byte channel, byte instrument) {
  this->talkMIDI( (0xC0 | channel), instrument, 0);
}
