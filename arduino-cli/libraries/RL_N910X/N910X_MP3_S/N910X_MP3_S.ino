#include"N910X.h"




N910X mp3(8);//定义管脚号  8  一线串口模式

void setup() {
   mp3.begin();//初始化管脚
   mp3.set_sd();//切换到 SD
   //mp3.set_usb_flash();//切换到 U盘
   mp3.play();//播放
   //mp3.set_play_number(1);//播放第1曲目 取值范围1-207
   //mp3.stop();//停止
   //mp3.pause();//暂停
   //mp3.play_up();//播放上一曲
   //mp3.play_down();//播放下一曲
}

void loop() {


}
