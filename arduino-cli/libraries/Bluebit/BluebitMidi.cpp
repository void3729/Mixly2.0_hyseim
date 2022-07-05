/*************************************
Build for midi, LEDONG module set.
Trimmed by Shanbin Zhou, 2017/01/04
*************************************/

#include "BluebitMidi.h"
//Constructor
LdSetMidi::LdSetMidi(uint8_t rxPin, uint8_t txPin) : Sserial(rxPin, txPin)
{
	pinRx = rxPin;
	pinTx = txPin;
}
//Initialize
void LdSetMidi::begin()
{
	Sserial.begin(31250);
	MidiChangeControl(0, 0x78, 0x00);   // all sounds off
	MidiChangeControl(0, 0x79, 0x7F);	// reset all controls
}
//Controls
void LdSetMidi::MidiChangeControl(byte channel, byte data1, byte data2)
{
	Sserial.write(0xB0 | (channel & 0x0F));
	Sserial.write(data1);
	Sserial.write(data2);
}
//Change instrument
void LdSetMidi::MidiChangeProgram(byte channel, byte ins)
{
	Sserial.write(0xC0 | (channel & 0x0F));
	Sserial.write(ins);
}
//Note Cmd
void LdSetMidi::noteOn(uint8_t cmd, uint8_t pitch, uint8_t velocity) {
	Sserial.write(cmd);
	Sserial.write(pitch);
	Sserial.write(velocity);
}
//Off Note
void LdSetMidi::noteOff() {
	MidiChangeControl(0, 0x78, 0x00);
}
//Note for milliseconds
// void LdSetMidi::noteOn(uint8_t cmd, uint8_t pitch, uint8_t velocity, uint16_t ms) {
	// noteOn(cmd, pitch, velocity);
	
// }

// void LdSetMidi::getTime():uint16_t {
	// duringTime = millis() - currentTime;
	// return duringTime;
// }
