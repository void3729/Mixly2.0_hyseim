#ifndef RL_VS1053_MIDI_h
#define RL_VS1053_MIDI_h

#include <Arduino.h>

#if defined __AVR__ || defined(ESP8266) 
#include <SoftwareSerial.h>
#elif defined (ESP32)
#include <ESP32SoftwareSerial.h>
#endif

const byte whiteNotes[] = {57,59,60, 62, 64, 65, 67, 69, 71, 72, 74, 76};
const byte allNotes[] = {60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71};
const byte drumNotes[] = {36, 37, 38, 42, 46, 50, 48, 47, 45, 55, 49, 51};
const byte Em7_11[] = {52, 57, 62, 67, 71, 76};
const byte C[] = {55, 60, 64, 67, 72, 76};
const byte D[] = {53, 57, 62, 69, 74, 78};
const byte Dm[] = {53, 57, 62, 69, 74, 77};
const byte E[] = {52, 59, 64, 68, 71, 76};
const byte Em[] = {52, 59, 64, 67, 71, 76};
const byte F[] = {53, 57, 65, 69, 72, 77};
const byte Fm[] = {53, 57, 65, 68, 72, 77};
const byte G[] = {55, 59, 62, 67, 71, 79};
const byte Gm[] = {55, 59, 67, 70, 74, 79};
const byte A[] = {52, 57, 64, 69, 73, 76};
const byte Am[] = {52, 57, 64, 69, 72, 76};
const byte B[] = {54, 59, 66, 71, 75, 78};
const byte Bm7[] = {54, 59, 66, 69, 74, 78};


#if defined __AVR__ || defined(ESP8266) 

class RL_VS1053_MIDI : public SoftwareSerial
{
  
  public: 

  RL_VS1053_MIDI(short rxPin, short txPin) : SoftwareSerial(rxPin,txPin) { };

  void talkMIDI(byte cmd, byte data1, byte data2);
  void noteOn(byte channel, byte note, byte attack_velocity);
  void noteOff(byte channel, byte note, byte release_velocity);
  void Aftertouch(byte channel, byte note, byte  pressure_amount);
  void Control_Change(byte channel, byte control_assected, byte  control_set) ;
  void Program_Change(byte channel, byte instrument);


  protected:
  
};

#elif defined ESP32
class RL_VS1053_MIDI : public ESP32SoftwareSerial
{
  
  public: 

  RL_VS1053_MIDI(short rxPin, short txPin) : ESP32SoftwareSerial(rxPin,txPin) { };

  void talkMIDI(byte cmd, byte data1, byte data2);
  void noteOn(byte channel, byte note, byte attack_velocity);
  void noteOff(byte channel, byte note, byte release_velocity);
  void Aftertouch(byte channel, byte note, byte  pressure_amount);
  void Control_Change(byte channel, byte control_assected, byte  control_set) ;
  void Program_Change(byte channel, byte instrument);
    
  protected:


    
};

#endif

#endif

//VS1053b Melodic Instruments (GM1)
//钢琴
#define VS1053_GM1_ACOUSTIC_GRAND_PIANO 0 //大钢琴（声学钢琴） 
#define VS1053_GM1_Bright_Acoustic_Piano 1 //亮音的钢琴
#define VS1053_GM1_ELECTRIC_GRAND_PIANO 2 //电钢琴 
#define VS1053_GM1_Honky_tonk_Piano 3 //酒吧钢琴 
#define VS1053_GM1_Electric_Piano_1 4 //电钢琴1
#define VS1053_GM1_Electric_Piano_2 5 //电钢琴2
#define VS1053_GM1_Harpsichord 6 //羽管键琴（拨弦古钢琴）
#define VS1053_GM1_Clavichord 7//科拉维科特琴（击弦古钢琴）

//打击乐器
#define VS1053_GM1_Celesta 8 //钢片琴
#define VS1053_GM1_Glockenspiel 9 //钟琴
#define VS1053_GM1_Music_box 10 //八音盒
#define VS1053_GM1_Vibraphone 11 //颤音琴
#define VS1053_GM1_Marimba 12 //马林巴
#define VS1053_GM1_Xylophone 13//木琴
#define VS1053_GM1_Tubular_Bells 14 //管钟
#define VS1053_GM1_Dulcimer 15 //大扬琴

//风琴
#define VS1053_GM1_Drawbar_Organ 16//击杆风琴
#define VS1053_GM1_Percussive_Organ 17 //打击式风琴
#define VS1053_GM1_Rock_Organ 18 //摇滚风琴
#define VS1053_GM1_Church_Organ 19//教堂风琴
#define VS1053_GM1_Reed_Organ 20//簧管风琴 
#define VS1053_GM1_Accordian 21//手风琴 
#define VS1053_GM1_Harmonica 22//口琴 
#define VS1053_GM1_Tango_Accordian 23//探戈手风琴

//吉他 
#define VS1053_GM1_Acoustic_Guitar1 24//(nylon) 尼龙弦吉他 
#define VS1053_GM1_Acoustic_Guitar2 25//(steel) 钢弦吉他 
#define VS1053_GM1_Electric_Guitar1 26//(jazz) 爵士电吉他 
#define VS1053_GM1_Electric_Guitar2 27//(clean) 清音电吉他 
#define VS1053_GM1_Electric_Guitar3 28//(muted) 闷音电吉他 
#define VS1053_GM1_Overdriven_Guitar 29//加驱动效果的电吉他 
#define VS1053_GM1_Distortion_Guitar 30//加失真效果的电吉他 
#define VS1053_GM1_Guitar_Harmonics 31//吉他和音

//贝司 
#define VS1053_GM1_Acoustic_Bass 32//大贝司（声学贝司） 
#define VS1053_GM1_Electric_Bass_finger 33// 电贝司（指弹） 
#define VS1053_GM1_Electric_Bass_pick 34// 电贝司（拨片） 
#define VS1053_GM1_Fretless_Bass 35//无品贝司 
#define VS1053_GM1_Slap_Bass1 36//击掌贝司1
#define VS1053_GM1_Slap_Bass2 37//击掌贝司2
#define VS1053_GM1_Synth_Bass1 38//电子合成Bass 1 
#define VS1053_GM1_Synth_Bass2 39//电子合成Bass 2

//弦乐 
#define VS1053_GM1_Violin 40//小提琴 
#define VS1053_GM1_Viola 41//中提琴 
#define VS1053_GM1_Cello 42//大提琴 
#define VS1053_GM1_Contrabass 43//低音大提琴 
#define VS1053_GM1_Tremolo_Strings 44//弦乐群颤音音色 
#define VS1053_GM1_Pizzicato_Strings 45//弦乐群拨弦音色 
#define VS1053_GM1_Orchestral_Harp 46//竖琴 
#define VS1053_GM1_Timpani 47//定音鼓

//合奏/合唱
#define VS1053_GM1_String_Ensemble1 48//弦乐合奏1 
#define VS1053_GM1_String_Ensemble2 49//弦乐合奏2 
#define VS1053_GM1_Synth_Strings1 50//合成弦乐合奏1 
#define VS1053_GM1_Synth_Strings2 51//合成弦乐合奏2 
#define VS1053_GM1_Choir_Aahs 52//人声合唱“啊” 
#define VS1053_GM1_Voice_Oohs 53//人声“嘟” 
#define VS1053_GM1_Synth_Voice 54//合成人声 
#define VS1053_GM1_Orchestra_Hit 55//管弦乐敲击齐奏

//铜管 
#define VS1053_GM1_Trumpet 56//小号 
#define VS1053_GM1_Trombone 57//长号 
#define VS1053_GM1_Tuba 58//大号 
#define VS1053_GM1_Muted_Trumpet 59//加弱音器小号 
#define VS1053_GM1_French_Horn 60//法国号（圆号） 
#define VS1053_GM1_Brass_Section 61//铜管组（铜管乐器合奏音色） 
#define VS1053_GM1_Synth_Brass1 62//合成铜管音色1 
#define VS1053_GM1_ynth_Brass2 63//合成铜管音色2
//簧管 
#define VS1053_GM1_Soprano_Sax 64//高音萨克斯风 
#define VS1053_GM1_Alto_Sax 65//次中音萨克斯风 
#define VS1053_GM1_Tenor_Sax 66//中音萨克斯风 
#define VS1053_GM1_Baritone_Sax 67//低音萨克斯风 
#define VS1053_GM1_Oboe 68//双簧管 
#define VS1053_GM1_English_Horn 69//英国管 
#define VS1053_GM1_Bassoon 70//巴松（大管） 
#define VS1053_GM1_Clarinet 71//单簧管（黑管）

//笛 
#define VS1053_GM1_Piccolo 72//短笛 
#define VS1053_GM1_Flute 73//长笛 
#define VS1053_GM1_Recorder 74//竖笛 
#define VS1053_GM1_Pan_Flute 75//排箫 
#define VS1053_GM1_Bottle_Blow 76//吹瓶
#define VS1053_GM1_Shakuhachi 77//日本尺八 
#define VS1053_GM1_Whistle 78//口哨声 
#define VS1053_GM1_Ocarina 79//奥卡雷那

//合成主音 
#define VS1053_GM1_Lead1 80//合成主音1（方波） 
#define VS1053_GM1_Lead2 81//合成主音2（锯齿波） 
#define VS1053_GM1_Lead3 82//合成主音3 (汽笛风琴) 
#define VS1053_GM1_Lead4 83//合成主音4 (吸管音) 
#define VS1053_GM1_Lead5 84//合成主音5 (十弦琴)
#define VS1053_GM1_Lead6 85//合成主音6（人声） 
#define VS1053_GM1_Lead7 86//合成主音7（平行五度） 
#define VS1053_GM1_Lead8 87//合成主音8（贝司加主音）
//合成音色 
#define VS1053_GM1_Pad1 88//合成音色1（新世纪） 
#define VS1053_GM1_Pad2 89//合成音色2（温暖） 
#define VS1053_GM1_Pad3 90//合成音色3 (多声部合成长音)
#define VS1053_GM1_Pad4 91//合成音色4（合唱） 
#define VS1053_GM1_Pad5 92//合成音色5 (拉奏长音)
#define VS1053_GM1_Pad6 93//合成音色6（金属长声） 
#define VS1053_GM1_Pad7 94//合成音色7（光环长音） 
#define VS1053_GM1_Pad8 95//合成音色8 (掠过长音)

//合成效果 
#define VS1053_GM1_FX1 96//雨声 
#define VS1053_GM1_FX2 97//音轨 
#define VS1053_GM1_FX3 98//水晶 
#define VS1053_GM1_FX4 99//大气 
#define VS1053_GM1_FX5 100//明亮 
#define VS1053_GM1_FX6 101//鬼怪 
#define VS1053_GM1_FX7 102//回声 
#define VS1053_GM1_FX8 103//科幻

//民间乐器 
#define VS1053_GM1_Sitar 104//西塔尔（印度） 
#define VS1053_GM1_Banjo 105//班卓琴（美洲） 
#define VS1053_GM1_Shamisen 106//三昧线（日本） 
#define VS1053_GM1_Koto 107//十三弦筝（日本） 
#define VS1053_GM1_Kalimba 108//卡林巴 
#define VS1053_GM1_Bagpipe 109//风笛 
#define VS1053_GM1_Fiddle 110//民族提琴 
#define VS1053_GM1_Shanai 111//山奈

//打击乐器 
#define VS1053_GM1_Tinkle_Bell 112//叮当铃 
#define VS1053_GM1_Agogo 113//阿哥哥牛玲
#define VS1053_GM1_Steel_Drums 114//钢鼓 
#define VS1053_GM1_Woodblock 115//木鱼 
#define VS1053_GM1_Taiko_Drum 116//太鼓 
#define VS1053_GM1_Melodic_Tom 117//通通鼓 
#define VS1053_GM1_Synth_Drum 118//合成鼓 
#define VS1053_GM1_Reverse_Cymbal 119//铜钹

//Sound Effects 声音效果 
#define VS1053_GM1_Guitar_Fret_Noise 120//吉他换把杂音 
#define VS1053_GM1_122_Breath_Noise 121//呼吸声 
#define VS1053_GM1_Seashore 122//海浪声 
#define VS1053_GM1_Bird_Tweet 123//鸟鸣 
#define VS1053_GM1_Telephone_Ring 124//电话铃 
#define VS1053_GM1_Helicopter 125//直升机 
#define VS1053_GM1_Applause 126//鼓掌声 
#define VS1053_GM1_Gunshot 127//枪声

//VS1053b Percussion Instruments (GM1+GM2)
#define VS1053_GM1_GM2_High_Q 27 //电子乐中的按钮声
#define VS1053_GM1_GM2_Slap 28//-拍打声
#define VS1053_GM1_GM2_Scratch_Push 29//-特效处理推音
#define VS1053_GM1_GM2_Scratch_Pull 30//-特效处理拉（勾）音
#define VS1053_GM1_GM2_Sticks 31//-鼓棒敲击声
#define VS1053_GM1_GM2_SquareClick 32//-敲方板
#define VS1053_GM1_GM2_Metronome 33//Click-节拍器击打
#define VS1053_GM1_GM2_Metronome_Bell 34//-节拍器铃声
#define VS1053_GM1_GM2_Acoustic_Bass_Drum 35//-原声大鼓（低音大鼓）
#define VS1053_GM1_GM2_Bass_Drum_1 36//-大鼓1（低音鼓）
#define VS1053_GM1_GM2_Side_Stick 37//-敲鼓边
#define VS1053_GM1_GM2_Acoustic_Snare 38//-原声小鼓（军鼓、小鼓）
#define VS1053_GM1_GM2_Hand_Clap 39//-拍手
#define VS1053_GM1_GM2_Electric_Snare 40//-电子小鼓（电子军鼓）
#define VS1053_GM1_GM2_Low_Floor_Tom 41//-低音落地筒鼓
#define VS1053_GM1_GM2_Closed_Hi_Hat 42//-闭合踩镲（闭合双面镲）
#define VS1053_GM1_GM2_High_Floor_Tom 43//-高音落地筒鼓
#define VS1053_GM1_GM2_Pedal_Hi_Hat 44//-踩镲（踩镲双面镲）
#define VS1053_GM1_GM2_Low_Tom 45//-低音筒鼓
#define VS1053_GM1_GM2_Open_Hi_Hat 46//-开放（双面）镲
#define VS1053_GM1_GM2_Low_Mid_Tom 47//-中低音筒鼓
#define VS1053_GM1_GM2_Hi_Mid_Tom 48//-中高音筒鼓	
#define VS1053_GM1_GM2_Crash_Cymbal 49//-镲击（吊镲）1
#define VS1053_GM1_GM2_High_Tom 50//-高音筒鼓
#define VS1053_GM1_GM2_Ride_Cymbal_1 51//-高架镲1
#define VS1053_GM1_GM2_Chinese_Cymbal 52//-中国镲
#define VS1053_GM1_GM2_Ride_Bell 53//-悬挂钟玲
#define VS1053_GM1_GM2_Tambourine 54//-铃鼓、小手鼓
#define VS1053_GM1_GM2_Splash_Cymbal 55//-侧击镲、溅开镲声
#define VS1053_GM1_GM2_Cowbell 56//-牛铃、颈铃
#define VS1053_GM1_GM2_Crash_Cymbal 57//-镲击（吊镲）2
#define VS1053_GM1_GM2_Vibraslap 58//-颤击
#define VS1053_GM1_GM2_Ride_Cymbal 59//-高架镲2
#define VS1053_GM1_GM2_High_Bongo 60//-高音邦加鼓
#define VS1053_GM1_GM2_Low_Bongo 61//-低音邦加鼓
#define VS1053_GM1_GM2_Mute_Hi_Conga 62//-闷音高音康加鼓
#define VS1053_GM1_GM2_Open_Hi_Conga 63//-开放音高音康加鼓
#define VS1053_GM1_GM2_Low_Conga 64//-低音康加鼓
#define VS1053_GM1_GM2_High_Timbale 65//-高音定音鼓
#define VS1053_GM1_GM2_Low_Timbale 66//-低音定音鼓
#define VS1053_GM1_GM2_High_Agogo 67//-高音撞铃（拉丁打铃）
#define VS1053_GM1_GM2_Low_Agogo 68//-低音撞铃（拉丁打铃）
#define VS1053_GM1_GM2_Cabasa 69//卡巴沙铃（珠铃）
#define VS1053_GM1_GM2_Maracas 70//-砂槌（砂铃）
#define VS1053_GM1_GM2_Short_Whistle 71//-短口哨
#define VS1053_GM1_GM2_Long_Whistle 72//-长口哨
#define VS1053_GM1_GM2_Short_Guiro 73//-短音刮板（短锯琴、短梗笛）
#define VS1053_GM1_GM2_Long_Guiro 74//-长音刮板（长梗笛）
#define VS1053_GM1_GM2_Claves 75//-音棒
#define VS1053_GM1_GM2_Hi_Wood_Block 76//-高音木鱼
#define VS1053_GM1_GM2_Low_Wood_Block 77//-低音木鱼
#define VS1053_GM1_GM2_Mute_Cuica 78//-闷音鸟鸣桶（短笛）
#define VS1053_GM1_GM2_Open_Cuica 79//-开音鸟鸣桶（短笛）
#define VS1053_GM1_GM2_Mute_Triangle 80//-闷音三角铁（三角铃）
#define VS1053_GM1_GM2_Open_Triangle 81//-开音三角铁
#define VS1053_GM1_GM2_Shaker 82//-摇筛（振动筛）
#define VS1053_GM1_GM2_Jingle_Bell 83//-门铃（信号铃、铃铛）
#define VS1053_GM1_GM2_Bell_Tree 84//-铃树（树铃）
#define VS1053_GM1_GM2_Castinets 85 //响板
#define VS1053_GM1_GM2_Mute_Surdo 86//-闷音苏多鼓
#define VS1053_GM1_GM2_Open_Surdo 87//-开音苏多鼓
