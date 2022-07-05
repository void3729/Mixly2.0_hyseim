/**************************************************************************
Copyright (C), 2014- ,  ʢ˼�ƽ�
File name:     kt540b.cpp
Author: jiangzhaohui      Version: v1.0      Date: 2016.12.15
Description: ����kt540b��mp3����
����ʹ�ã�
1������һ������ʵ������ָ������rx tx����
2������begin()��ʼ��
3�����ø����ܺ�������ɸ����ü����š�

Others:
Function List:
1.
2.
History:

1. Date: 2014.10.8       Author:
Modification: ���봴��
2. ...
****************************************************************************/

#include "BluebitKt540b.h"

Kt540bClass::Kt540bClass(int rxPin, int txPin) : Sserial(rxPin, txPin)
{
	pinRx = rxPin;
	pinTx = txPin;
}

void Kt540bClass::begin()
{
	Sserial.begin(9600);
	delay(1500);   //�ϵ���ʱ
}

/***************************************************************************
Function:       play()
Description:    �ָ�����
Calls:
Called By:
Input:
Output:
Return:
Others:
***************************************************************************/
void Kt540bClass::play(void)     //���ţ��������ͣ�лָ���
{
	sendCmd(CMD_PLAY, 0, 0);
}

/***************************************************************************
Function:       play()
Description:    ����ָ����Ÿ���
Calls:
Called By:
Input:
1��uint8_t songNum���������
Output:
Return:
Others:
***************************************************************************/
void Kt540bClass::play(uint8_t songNum)   //����ָ����Ÿ��� 
{
	sendCmd(CMD_PLAY_SONG, 0x00, songNum);
}

/***************************************************************************
Function:       play()
Description:    ��ָ����������ָ�����кŸ���
Calls:
Called By:
Input:
1��uint8_t songNum���������
2��uint8_t volume������
Output:
Return:
Others:
***************************************************************************/
//void Kt540bClass::play(uint8_t songNum, uint8_t volume) 
//{
//	sendCmd(CMD_PLAY_WITH_VOLUME, volume, songNum);
//}

/***************************************************************************
Function:       playDir()
Description:    ����ָ���ļ���ָ������
Calls:
Called By:
Input:
1��uint8_t songNum���������
2��uint8_t volume������
Output:
Return:
Others:
***************************************************************************/
void Kt540bClass::playDir(uint8_t dir, uint8_t songNum)
{
	sendCmd(CMD_DIR_PLAY, dir, songNum);
}

/***************************************************************************
Function:       play()
Description:    ����ָ����Ÿ���
Calls:
Called By:
Input:
1��uint8_t songNum���������
Output:
Return:
Others:
***************************************************************************/
void Kt540bClass::playNext(void)    //����һ��
{
	sendCmd(CMD_NEXT, 0, 0);
}

/***************************************************************************
Function:       play()
Description:    ����ָ����Ÿ���
Calls:
Called By:
Input:
1��uint8_t songNum���������
Output:
Return:
Others:
***************************************************************************/
void Kt540bClass::playPrev(void)    //����һ��
{
	sendCmd(CMD_PREV, 0, 0);
}

/***************************************************************************
Function:       setVolume()
Description:    ��������
Calls:
Called By:
Input:
	1��uint8_t volume������ֵ ��Χ 0-30
Output:
Return:  
Others:
***************************************************************************/
void Kt540bClass::setVolume(uint8_t volume)  //��������
{
	sendCmd(CMD_VOLUME, 0x00, volume);
}

/***************************************************************************
Function:       volumeInc()
Description:    ����+
Calls:
Called By:
Input:
Output:
Return:
Others:
***************************************************************************/
void Kt540bClass::volumeInc()       //������
{
	sendCmd(CMD_VOLUME_INC, 0, 0);
}

/***************************************************************************
Function:       volumeDec()
Description:    ����-
Calls:
Called By:
Input:
Output:
Return:
Others:
***************************************************************************/
void Kt540bClass::volumeDec()       //����+
{
	sendCmd(CMD_VOLUME_DEC, 0, 0);
}

/***************************************************************************
Function:       setEQ()
Description:    ����EQ
Calls:
Called By:
Input:
1��uint8_t eq ��eqֵ
Output:
Return:
Others:
***************************************************************************/
void Kt540bClass::setEQ(uint8_t eq)                  //����EQֵ
{
	sendCmd(CMD_SET_EQ, 0, eq);
}

/***************************************************************************
Function:       loop()
Description:    ָ����Ŀѭ������
Calls:
Called By:
Input:
1��uint8_t songNo ��Ҫѭ������Ŀ���
Output:
Return:
Others:
***************************************************************************/
void Kt540bClass::loop(uint8_t songNo)               
{
	sendCmd(CMD_LOOP, 0, songNo);
}

/***************************************************************************
Function:       loop()
Description:    ָ��Ŀ¼��ָ����Ÿ���ѭ������
Calls:
Called By:
Input:
1��uint8_t dir��Ŀ¼�ţ�Ŀ¼����Ϊ01��02��03�����ĸ�ʽ��
2��uint8_t songNo ��Ҫѭ������Ŀ���
Output:
Return:
Others:
***************************************************************************/
void Kt540bClass::loop(uint8_t dir, uint8_t songNo)  
{
	sendCmd(CMD_LOOP, dir, songNo);
}

/***************************************************************************
Function:       loopDir()
Description:    ָ��Ŀ¼ѭ������
Calls:
Called By:
Input:
1��uint8_t dir��Ŀ¼�ţ�Ŀ¼����Ϊ01��02��03�����ĸ�ʽ��
Output:
Return:
Others:
***************************************************************************/
void Kt540bClass::loopDir(uint8_t dir)              
{
	sendCmd(CMD_DIR_LOOP, 0, dir);
}

/***************************************************************************
Function:       singleLoop()
Description:    ����ѭ�����أ�ͨ���ڷ�һ��ָ���һ�׸�󣬷���ָ��ָ���Ƿ�ѭ��
     ʾ����ѭ���ŵ�3�׸裩��
	        ... 
	      	mp3Play.play(3);
	        mp3Play.singleLoop(0);
			... 
Calls:
Called By:
Input:
1��boolean onOff: 0:ѭ��  1����ѭ��
Output:
Return:
Others:
	test state: pass
***************************************************************************/
void Kt540bClass::singleLoop(boolean onOff)         
{
	sendCmd(CMD_LOOP_ONE, 0, onOff);
}

/***************************************************************************
Function:       radomPlay()
Description:    �������,�Կ��������ļ�������ţ������ļ����еĸ�
Calls:
Called By:
Input:
Output:
Return:
Others:
	test state: pass
***************************************************************************/
void Kt540bClass::radomPlay(void)  //�������
{
	sendCmd(CMD_RADOM_PLAY, 0, 0);
}

/***************************************************************************
Function:       pause()
Description:    ��ͣ
Calls:
Called By:
Input:
Output:
Return:
Others:
***************************************************************************/
void Kt540bClass::pause(void)   //��ͣ
{
	sendCmd(CMD_PAUSE, 0, 0);
}

/***************************************************************************
Function:       stop()
Description:    ֹͣ����
Calls:
Called By:
Input:
Output:
Return:
Others:
***************************************************************************/
void Kt540bClass::stop(void)    //ֹͣ
{
	sendCmd(CMD_STOP, 0, 0);
}

/***************************************************************************
Function:       setDac()
Description:    ���û�ֹͣDAC
Calls:
Called By:
Input:
bool onOff��0��ֹͣ 1������
Output:
Return:
Others:
***************************************************************************/
void Kt540bClass::setDac(bool onOff)  //DAC����
{
	sendCmd(CMD_DAC_ON_OFF, 0, 0);
}

/***************************************************************************
Function:       enterSleep()
Description:    ����˯��ģʽ
Calls:
Called By:
Input:
Output:
Return:
Others:
***************************************************************************/
void Kt540bClass::enterSleep(void)    
{
	sendCmd(CMD_ENTER_SLEEP_MODE, 0, 0);
}

/***************************************************************************
Function:       exitSleep()
Description:    �˳�˯��ģʽ
Calls:
Called By:
Input:
Output:
Return:
Others:
***************************************************************************/
void Kt540bClass::exitSleep(void)    
{
	sendCmd(CMD_EXIT_SLEEP_MODE, 0, 0);
}

/***************************************************************************
Function:       resetDevice()
Description:    �豸��λ
Calls:
Called By:
Input:
Output:
Return:
Others:
***************************************************************************/
void Kt540bClass::resetDevice(void)
{
	sendCmd(CMD_RESET, 0, 0);
}

/***************************************************************************
Function:       setPlayMedia()
Description:    ѡ�񲥷�ý��
Calls:
Called By:
Input:
MEDIA playMedia�� 	UDISK��U��  TFCARD��TF�� FLASH��FLASHоƬ
Output:
Return:
Others:
***************************************************************************/
void Kt540bClass::setPlayMedia(MEDIA playMedia)
{
	sendCmd(CMD_MEDIA_SELECT, 0, 0);
}

/***************************************************************************
Function:       getPlayState()
Description:    ��ȡ�豸��ǰ״̬
Calls:
Called By:
Input:
Output: �豸״̬ 0:����ֹͣ 1������ 2����ͣ
Return:
Others:
***************************************************************************/
uint8_t Kt540bClass::getPlayState(void)
{
	uint8_t Buff[10];
	uint8_t i;

	sendCmd(0x42, 0, 0);
	while (!Sserial.available());
	while (Sserial.available())
	{
		if(0x7e == Sserial.read())
		{
			while (!Sserial.available());
			if  (0xff == Sserial.read())
			{
				Sserial.readBytes(Buff, 8);
			}
			return Buff[4];
		}		
	}
	return 0xff;
}

/***************************************************************************
Function:       sendCmd()
Description:    ��ģ�鷢��ָ��
Calls:
Called By:
Input:
1��uint8_t cmd�� ָ��
2��uint8_t data1�� �����ֽ�1
3��uint8_t data2�� �����ֽ�2
Output:
Return:
Others:
***************************************************************************/
void Kt540bClass::sendCmd(uint8_t cmd, uint8_t data1, uint8_t data2)
{
	uint8_t sendBuff[10];
	uint8_t i;
	uint16_t temp;
	uint8_t tempH, tempL;

	sendBuff[0] = 0x7e;    //��ʼλ
	sendBuff[1] = 0xff;    //�汾
	sendBuff[2] = 0x06;    //����
	sendBuff[3] = cmd;     //����
	sendBuff[4] = 0x00;    //�Ƿ�����0��������
	sendBuff[5] = data1;   //�����ֽ�1
	sendBuff[6] = data2;   //�����ֽ�2

	temp = 0xff + 0x06 + cmd + 0x00 + data1 + data2;
	temp = (0xFFFF - temp) + 1;
	tempH = (uint8_t)(temp >> 8);
	tempL = (uint8_t)(temp & 0xff);
	sendBuff[7] = tempH;    //У����ֽ�
	sendBuff[8] = tempL;    //У����ֽ�
	sendBuff[9] = 0xef;     //����

	for (i = 0; i < 10; i++)
		Sserial.write(sendBuff[i]);  
	delay(20);    //datasheetҪ������ָ�������������20ms������ſ�һ��
}



//Kt540bClass Kt540b;

