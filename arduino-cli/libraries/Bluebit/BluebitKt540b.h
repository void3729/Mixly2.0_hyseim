// BluebitKt540b.h

#ifndef _BLUEBITKT540B_h
#define _BLUEBITKT540B_h

#if defined(ARDUINO) && ARDUINO >= 100
	#include "arduino.h"
#else
	#include "WProgram.h"
#endif

#include <SoftwareSerial.h>

/*ѡ������*/
#define CMD_NEXT                     0x01
#define CMD_PREV                     0x02
#define CMD_PLAY_SONG                0x03
/*��������*/
#define CMD_VOLUME_INC               0x04
#define CMD_VOLUME_DEC               0x05
#define CMD_VOLUME                   0x06
#define CMD_SET_EQ                   0x07
#define CMD_LOOP                     0x08
#define CMD_MEDIA_SELECT             0x09
/*�豸״̬����*/
#define CMD_ENTER_SLEEP_MODE         0x0A
#define CMD_EXIT_SLEEP_MODE          0x0B
#define CMD_RESET                    0x0C
#define CMD_PLAY                     0x0D
#define CMD_PAUSE                    0x0E
#define CMD_DIR_PLAY                 0x0F
#define CMD_DIR_PLAY1                0x14
#define CMD_STOP                     0x16
#define CMD_DIR_LOOP                 0x17
#define CMD_RADOM_PLAY               0x18
#define CMD_LOOP_ONE                 0x19
#define CMD_DAC_ON_OFF               0x1A
#define CMD_PLAY_WITH_VOLUME         0x22
/*��ȡ�豸״̬*/
#define CMD_GET_STATE                0x42
#define PLAY_STATE                   0x01
#define STOP_STATE                   0x00

typedef enum {
	UDISK,
	TFCARD,
	FLASH,
} MEDIA;

class Kt540bClass
{
 protected:

 public:
	 Kt540bClass(int rxPin, int txPin);
	void begin();
	void play(void);     //���ţ��������ͣ�лָ���
	void play(uint8_t songNum);   //����ָ����Ÿ��� 
	//void play(uint8_t songNum, uint8_t volume); //��������������ָ����Ÿ��� 
	void playDir(uint8_t dir, uint8_t songNum); //����ָ���ļ���ָ������
	void playNext(void);    //����һ��
	void playPrev(void);    //����һ��
	void setVolume(uint8_t volume);  //��������
	void volumeInc();       //����+
	void volumeDec();       //����-
	void setEQ(uint8_t eq);                  //����EQֵ
	void loop(uint8_t songNo);               //ָ�����ļ����������Ÿ���ѭ������
	void loop(uint8_t dir, uint8_t songNo);  //ָ��Ŀ¼�����Ÿ���ѭ������
	void loopDir(uint8_t dir);               //ָ��Ŀ¼ѭ������
	void singleLoop(boolean onOff);         //����ѭ������
	void radomPlay(void);  //������ţ������豸�ϵĸ裩
	void pause(void);   //��ͣ
	void stop(void);    //ֹͣ
	void setDac(bool onOff);  //DAC����
	void enterSleep(void);    //����˯��
	void exitSleep(void);    //�˳�˯��
	void resetDevice(void);  //�豸��λ
	void setPlayMedia(MEDIA playMedia);  //ѡ����ý��
	uint8_t getPlayState(void); //��ȡ����״̬
private:
	int pinRx;
	int pinTx;
	int time;
	SoftwareSerial Sserial;

	void sendCmd(uint8_t cmd, uint8_t data1, uint8_t data2);
};

//extern Kt540bClass Kt540b;

#endif

