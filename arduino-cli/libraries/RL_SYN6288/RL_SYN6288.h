#ifndef _SYN6288_H_
#define _SYN6288_H_
#include <Arduino.h>
#include <SoftwareSerial.h>

void OneUTF82Unicode(const char* utf_char, char* unicode_char);//单个字节  UTF8-Unicode
char* utf82unicode(const char* utf,size_t *unicode_number);//字符串  UTF8-Unicode
int length_of_unicode(const char* utf);
class SYN6288_Serial : public SoftwareSerial
{
public:

SYN6288_Serial(short rxPin, short txPin) : SoftwareSerial(rxPin,txPin) { };

void Output(u8 music_type,u8 code_format,u8* data,u8 len);
void Output(u8* data,u8 len);

/*文本控制标记说明部分列表
 *[v?]  0~16（其中0为静音）前景音量 默认[v10]
 *[m?]  0~16（其中0为静音）背景音量 默认[m4]
 *[t?]  0~5 词语语速  默认[t4]  
 *[o?]  0设置为自然朗读方式  1设置为Word-By-Word方式
 *其他更多指令参照官方数据手册
*/

void Stop();
void Pause();
void Recover();
void EnterSleep();
void ExitSleep();

private:

};



#endif
