

#include"RL_SYN6288.h"
#include <Arduino.h>
#include <SoftwareSerial.h>

typedef struct
{
 u8 send_buf[200];   //发送数据缓冲区
  
}Syn6288_Type;
Syn6288_Type syn6288;

 void OneUTF82Unicode(const char* utf_char, char* unicode_char)
{
    //unicode: 0x192->110010010 ,utf8:0xC692->11000110|10010010
    //大端序
    int utf_length = strlen(utf_char);
    //0x3F->00111111
    switch(utf_length)
    {
        case 1: 
            char buf;
            //utf_char=sprintf(buf,"%04X",utf_char); 
            unicode_char[0] = 0;
            unicode_char[1] = utf_char[0];
    
            break;
        case 2: 
            unicode_char[0] = (utf_char[0] & 0x3C) >> 2;
            unicode_char[1] = (utf_char[1] & 0x3F) | ((utf_char[0] & 0x3) << 6);
            break;
        case 3: 
            unicode_char[0] = ((utf_char[1] & 0x3C) >> 2) | ((utf_char[0] & 0xF) << 4);
            unicode_char[1] = (utf_char[2] & 0x3F) | ((utf_char[1] & 0x3) << 6);
          
            break;
        default:
            //assert(0);
            //printf("utf_char length is bigger than 4 unsupported.\n");
            break;
    }
}

 char* utf82unicode(const char* utf,size_t *unicode_number)
{    
    char* utf8 = strdup(utf); //字符串拷贝,返回字符串指针
    size_t utf8_length = strlen(utf8); 
    //这里可以自己考虑实现更精确的大小.
    //+2是留两个00.
    char* unicode = (char*)malloc(utf8_length*2+2);
    memset(unicode,0,utf8_length*2+6);
    size_t index  = 0;
    size_t start = 0;
    u8 temp;
    //10000000=0x80 1110=0xE 110=0x6
    u8 flag = 0;
    size_t unicode_index = 0;
    bool is_finded = false;
    while((temp = utf8[index]))
    {
        start = index;
 
        temp = temp >> 4 ;
        if(temp > 0xE)
        {
            //assert(0);
            //printf("utf8 bigger than 4 byte is not supported.\n");
            break;
        }
 
        if(temp == 0xE)
        {
            index+=3;
            is_finded = true;
        }
 
        temp = temp >> 1; //>>5
        if(!is_finded && temp == 0x6)
        {
            index+=2;
            is_finded = true;
        }
 
        temp = temp >> 2;
        if(!is_finded && temp == 0x00)
        {
            index+=1;
            is_finded = true;
        }
 
        if(index > utf8_length)
        {
            break;
        }
        flag = utf8[index];
        utf8[index] = 0;
        OneUTF82Unicode(utf8+start,unicode+unicode_index);
        utf8[index] = flag;
        unicode_index+=2;
        is_finded = false;
    }
    free(utf8);
    *unicode_number = unicode_index/2;
    return unicode;
}


int length_of_unicode(const char* utf)
{
	char* utf8 = strdup(utf); //字符串拷贝,返回字符串指针
    size_t utf8_length = strlen(utf8); 
	size_t unicode_index = 0;
	size_t index  = 0;
    size_t start = 0;
	bool is_finded = false;
    u8 temp;
	u8 flag = 0;
	while((temp = utf8[index]))
    {
        start = index;
 
        temp = temp >> 4 ;
        if(temp > 0xE)
        {
            //assert(0);
            //printf("utf8 bigger than 4 byte is not supported.\n");
            break;
        }
 
        if(temp == 0xE)
        {
            index+=3;
            is_finded = true;
        }
 
        temp = temp >> 1; //>>5
        if(!is_finded && temp == 0x6)
        {
            index+=2;
            is_finded = true;
        }
 
        temp = temp >> 2;
        if(!is_finded && temp == 0x00)
        {
            index+=1;
            is_finded = true;
        }
 
        if(index > utf8_length)
        {
            break;
        }
        flag = utf8[index];
        utf8[index] = 0;
        //OneUTF82Unicode(utf8+start,unicode+unicode_index);
        utf8[index] = flag;
        unicode_index+=2;
        is_finded = false;
	}
	free(utf8);
	return 	unicode_index;
	
}

void SYN6288_Serial::Output(u8 music_type,u8 code_format,u8* data,u8 len)
{
  
  if(len > 190) len = 190;
  
  syn6288.send_buf[0] = 0xFD;   //帧头
  
  syn6288.send_buf[1] = 0;      //数据区长度
  syn6288.send_buf[2] = 0;
  
  //--------------数据区--------------
  syn6288.send_buf[3] = 0x01;   //命令字节
  
  //命令参数字节(高五位:背景音乐  低三位:编码格式)
  syn6288.send_buf[4] = ((music_type<<5) + code_format);
  
  //待发送文本
  for(u8 i=0;i<len;i++)
  {
    syn6288.send_buf[5+i] = data[i];
  }
  
  u16 temp = len+3;
  syn6288.send_buf[1] = ((temp>>8)&0xFF);     //数据区长度
  syn6288.send_buf[2] = (temp&0xFF);
  
  //异或校验
  u8 check=0;
  for(u8 i=0;i<(len+5);i++)
  {
    check ^= syn6288.send_buf[i];
  }
  syn6288.send_buf[5+len] = check;
  this->write(syn6288.send_buf,len+6); 
  
  }
void SYN6288_Serial::Output(u8* data,u8 len)
{
  Output(0,3,data,len);
 }


 
 
void SYN6288_Serial::Stop(){
  syn6288.send_buf[0] = 0xFD;   //帧头
  syn6288.send_buf[1] = 0x00;   //数据区长度
  syn6288.send_buf[2] = 0x02;   
  syn6288.send_buf[3] = 0x02; //命令字
  syn6288.send_buf[4] = 0xFD; //异或校验
  this->write(syn6288.send_buf,5); 
   }
void SYN6288_Serial::Pause(){
  syn6288.send_buf[0] = 0xFD;   //帧头
  syn6288.send_buf[1] = 0x00;   //数据区长度
  syn6288.send_buf[2] = 0x02;   
  syn6288.send_buf[3] = 0x03; //命令字
  syn6288.send_buf[4] = 0xFC; //异或校验
  this->write(syn6288.send_buf,5); 
  }
void SYN6288_Serial::Recover(){
  syn6288.send_buf[0] = 0xFD;   //帧头
  syn6288.send_buf[1] = 0x00;   //数据区长度
  syn6288.send_buf[2] = 0x02;   
  syn6288.send_buf[3] = 0x04; //命令字
  syn6288.send_buf[4] = 0xFB; //异或校验
  this->write(syn6288.send_buf,5); 
  }
void SYN6288_Serial::EnterSleep(){
  syn6288.send_buf[0] = 0xFD;   //帧头
  syn6288.send_buf[1] = 0x00;   //数据区长度
  syn6288.send_buf[2] = 0x02;   
  syn6288.send_buf[3] = 0x88; //命令字
  syn6288.send_buf[4] = 0x77; //异或校验
  this->write(syn6288.send_buf,5); 
   }
void SYN6288_Serial::ExitSleep(){
  syn6288.send_buf[0] = 0xFD;   //帧头
  syn6288.send_buf[1] = 0x00;   //数据区长度
  syn6288.send_buf[2] = 0x02;   
  syn6288.send_buf[3] = 0x21; //命令字
  syn6288.send_buf[4] = 0xDE; //异或校验
  this->write(syn6288.send_buf,5); 
  delay(200);
  this->write(syn6288.send_buf,5); 
  delay(200);
  } 
