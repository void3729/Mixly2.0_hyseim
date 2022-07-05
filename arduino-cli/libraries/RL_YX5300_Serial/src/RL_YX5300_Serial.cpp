/*
 * YX5300_Serial.h - Library for Serial MP3 Player board from Catalex (YX5300 chip)
 * Created by Salvador Rueda Pau, July 23, 2016.
 * License as GPL v3 (http://www.gnu.org/licenses/gpl.html)
 *
 */

#include "Arduino.h"
#include "RL_YX5300_Serial.h"



void YX5300_Serial::showDebug(bool op){
  // showDebug (op) 0:OFF 1:ON
    _showDebugMessages = op;
}


int YX5300_Serial::available(){
  return this->available();
}

int YX5300_Serial::read(){
  return this->read();
}

void YX5300_Serial::playNext(){
  this->sendCommand(CMD_NEXT);
}

void YX5300_Serial::playPrevious(){
  this->sendCommand(CMD_PREV);
}

void YX5300_Serial::volUp(){
   this->sendCommand(CMD_VOL_UP);
}

void YX5300_Serial::volDown(){
   this->sendCommand(CMD_VOL_DOWN);
}

void YX5300_Serial::setVol(byte v){
   // Set volumen (0-30)
   this->sendCommand(CMD_SET_VOL, v);
}

void YX5300_Serial::playSL(byte n){
   // Play single loop n file
   this->sendCommand(CMD_PLAY_SLOOP, n);
}

void YX5300_Serial::playSL(byte f, byte n){
   // Single loop play n file from f folder
   this->sendCommand(CMD_PLAY_SLOOP, f, n);
}

void YX5300_Serial::play(){
   this->sendCommand(CMD_PLAY);
}

void YX5300_Serial::pause(){
   this->sendCommand(CMD_PAUSE);
}

void YX5300_Serial::play(byte n){
   // n number of the file that must be played.
   // n possible values (1-255)
   this->sendCommand(CMD_PLAYN, n);
}

void YX5300_Serial::play(byte n, byte vol){
   // n number of the file that must be played

   this->sendCommand(CMD_PLAY_W_VOL, vol, n);
}

void YX5300_Serial::playF(byte f){
   // Play all files in the f folder

   this->sendCommand(CMD_FOLDER_CYCLE, f, 0);
}

void YX5300_Serial::stop(){
   this->sendCommand(CMD_STOP_PLAY);
}

void YX5300_Serial::qPlaying(){
  // Ask for the file is playing
   this->sendCommand(CMD_PLAYING_N);
}

void YX5300_Serial::qStatus(){
   // Ask for the status.
   this->sendCommand(CMD_QUERY_STATUS);
}

void YX5300_Serial::qVol(){
  // Ask for the volumen
   this->sendCommand(CMD_QUERY_VOLUME);
}

void YX5300_Serial::qFTracks(){    // !!! Nonsense answer
  // Ask for the number of tracks folders
   this->sendCommand(CMD_QUERY_FLDR_TRACKS);
}

void YX5300_Serial::qTTracks(){
  // Ask for the total of tracks
   this->sendCommand(CMD_QUERY_TOT_TRACKS);
}

void YX5300_Serial::qTFolders(){
  // Ask for the number of folders
   this->sendCommand(CMD_QUERY_FLDR_COUNT);
}

void YX5300_Serial::sleep(){
  // Send sleep command
  this->sendCommand(CMD_SLEEP_MODE);
}

void YX5300_Serial::wakeup(){
  // Send wake up command
  this->sendCommand(CMD_WAKE_UP);
}

void YX5300_Serial::reset(){
  // Send reset command
  this->sendCommand(CMD_RESET);
}



void YX5300_Serial::sendCommand(byte command){
  this->sendCommand(command, 0, 0);
}

void YX5300_Serial::sendCommand(byte command, byte dat2){
  this->sendCommand(command, 0, dat2);
}


void YX5300_Serial::sendCommand(byte command, byte dat1, byte dat2){
  byte Send_buf[8] = {0}; // Buffer for Send commands.
  String mp3send = "";

  // Command Structure 0x7E 0xFF 0x06 CMD FBACK DAT1 DAT2 0xEF

  #ifndef NO_SERIALMP3_DELAY
  delay(20);
  #endif

  Send_buf[0] = 0x7E;    // Start byte
  Send_buf[1] = 0xFF;    // Version
  Send_buf[2] = 0x06;    // Command length not including Start and End byte.
  Send_buf[3] = command; // Command
  Send_buf[4] = 0x01;    // Feedback 0x00 NO, 0x01 YES
  Send_buf[5] = dat1;    // DATA1 datah
  Send_buf[6] = dat2;    // DATA2 datal
  Send_buf[7] = 0xEF;    // End byte



  for(int i=0; i<8; i++)
  {
    this->write(Send_buf[i]) ;
    mp3send+=sbyte2hex(Send_buf[i]);
  }
  if (_showDebugMessages){
     Serial.print("Sending: ");
     Serial.println(mp3send); // watch what are we sending
  }



  #ifndef NO_SERIALMP3_DELAY
  delay(1000);
  // Wait between sending commands.
  #endif
}

//String sanswer(void);
//int iansbuf = 0;                 // Index for answer buffer.
//static uint8_t ansbuf[10] = {0}; // Buffer for the answers.

String YX5300_Serial::decodeMP3Answer(){
 // Response Structure  0x7E 0xFF 0x06 RSP 0x00 0x00 DAT 0xFE 0xBA 0xEF
  //
  // RSP Response code
  // DAT Response additional data

  String decodedMP3Answer="";

   decodedMP3Answer=sanswer();

     switch (ansbuf[3])
     {
    case 0x3A:
      decodedMP3Answer += " -> Memory card inserted.";
      break;

    case 0x3D:
      decodedMP3Answer += " -> Completed play num " + String(ansbuf[6], DEC);
      break;

    case 0x40:
      decodedMP3Answer += " -> Error";
      break;

    case 0x41:
      decodedMP3Answer += " -> Data recived correctly. ";
      break;

    case 0x42:
      switch(ansbuf[6]){
        case 0: decodedMP3Answer += " -> Status: stopped"; break;
        case 1: decodedMP3Answer += " -> Status: playing"; break;
        case 2: decodedMP3Answer += " -> Status: paused"; break;
      }
      break;

    case 0x43:
      decodedMP3Answer += " -> Vol playing: " + String(ansbuf[6], DEC);
      break;

    case 0x48:
      decodedMP3Answer += " -> File count: " + String(ansbuf[6], DEC);
      break;


    case 0x4C:
      decodedMP3Answer += " -> Playing: " + String(ansbuf[6], DEC);
      break;

    case 0x4E:
      decodedMP3Answer += " -> Folder file count: " + String(ansbuf[6], DEC);
      break;

    case 0x4F:
      decodedMP3Answer += " -> Folder count: " + String(ansbuf[6], DEC);
      break;
     }


   ansbuf[3] = 0; // Clear ansbuff.
   return decodedMP3Answer;
}






/********************************************************************************/
/*Function: sbyte2hex. Returns a byte data in HEX format.	                */
/*Parameter:- uint8_t b. Byte to convert to HEX.                                */
/*Return: String                                                                */


String YX5300_Serial::sbyte2hex(byte b)
{
  String shex;

  //Serial.print("0x");
  shex="0X";

  //if (b < 16) Serial.print("0");
  if (b < 16) shex+="0";
  //Serial.print(b, HEX);
  shex+=String(b,HEX);
  //Serial.print(" ");
  shex+=" ";
  return shex;
}


/********************************************************************************/
/*Function: sanswer. Returns a String answer from mp3 UART module.	            */
/*Return: String.  the answer                                                   */


String YX5300_Serial::sanswer(void){
  // Response Structure  0x7E 0xFF 0x06 RSP 0x00 0x00 DAT 0xFE 0xBA 0xEF
  //
  // RSP Response code
  // DAT Response additional data

  // if there are something available start to read from mp3 serial.
  // if there are "0x7E" it's a beginning.
  //
  //  read while something readed and it's not the end "0xEF"


  byte b;
  String mp3answer="";                // Answer from the this.
  int iansbuf = 0;

  if (this->available()){
   do{
    b = this->read();

    if(b == 0x7E){  // if there are "0x7E" it's a beginning.
      iansbuf=0;    //  ansbuf index to zero.
      mp3answer="";
    }

    ansbuf[iansbuf] = b;
    mp3answer+=sbyte2hex(ansbuf[iansbuf]);
    iansbuf++; //  increase this index.

   }while(b != 0xEF);
   // while there are something to read and it's not the end "0xEF"

  }
  return mp3answer;
 }
