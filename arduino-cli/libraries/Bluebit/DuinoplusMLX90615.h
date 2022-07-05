// DuinoplusMLX90615.h

#ifndef _DUINOPLUSMLX90615_h
#define _DUINOPLUSMLX90615_h

#if defined(ARDUINO) && ARDUINO >= 100
	#include "arduino.h"
#else
	#include "WProgram.h"
#endif

/*�����*/
#define ADDRESS      0x10     //������ַ
#define PWM_T_MIN    0x10     
#define PWM_T_RANGE  0x11
#define CONFIG       0x12    //��������
#define EMISSIVITY   0x13    //������·���������
#define ID_LOW       0x1E
#define ID_HIGH      0x1F
#define ROW_IR_DATA  0x25    //������
#define TEMP_TA      0x26    //оƬ�¶�
#define TEMP_TO      0x27    //����Ŀ���¶�
#define SLEEP        0xC6    //����
/*���������λ����*/
#define PWM                 0        //PWM ͨ�ŷ�ʽ
#define IIC                 1        //SMBus ͨ�ŷ�ʽ 
#define PWM_L               (1<<1)   //PWMƵ��ѡ���Ƶ ��Ƶ
#define PWM_H               (0<<1)   //PWMƵ��ѡ���Ƶ
#define PWM_TEMP_TA         (1<<2)   //PWM����¶�ѡ��оƬ
#define PWM_TEMP_TO         (0<<2)   //PWM����¶�ѡ�񱻲�����
#define IIR_1               0x1000   //�����˲�����������
#define IIR_10              0x2000
#define IIR_18              0x3000
#define IIR_24              0x4000
#define IIR_31              0x5000
#define IIR_38              0x6000
#define IIR_45              0x7000

#define SLEEP_ON  1
#define SLEEP_OFF 0

typedef enum{
	CHIP_TEMP,
	OBJ_TEMP
}TEMP;

typedef enum{
	IIC_MODE,
	PWM_MODE
}MODE;

class MLX90615
{
public:
	MLX90615(MODE rwMode = IIC_MODE);
	~MLX90615();

	void begin(void);

	uint8_t getAddr(void);
	void  setAddr(uint8_t addr_L, uint8_t addr_H);
	float getEmissivity(void);   //��ȡ�����������ϵ��
	void setEmissivity(float e);   //���ú����������ϵ��
	float getPWM_T_min(void);
	void  setPWM_T_min(float dat);
	float getPWM_T_range(void);
	void  setPWM_T_range(float dat);
	uint16_t getConfig(void);
	void  setConfig(uint16_t dat);
	uint8_t getIIR(void);    //��ȡ�����˲�ֵ
	uint8_t setIIR(uint16_t); //���������˲�ֵ
	uint32_t getID(void);
	float getTemp(TEMP temp=OBJ_TEMP);
	void sleep(boolean sleepFlag);
	void PWM2IIC(void); //PWMģʽ�л���IICģʽ

private:	
	MODE rwMode;        //ͨ��ģʽ��IIC��PWM
	uint8_t device_addr;

	void erase(uint8_t addr); //����,EEPROM���ݸ���ʱ��ͨ����Ҫִ�в���������
	void write(uint8_t cmd, uint8_t dat_L, uint8_t dat_H);
	uint8_t read(uint8_t cmd, uint8_t *buffer);
	uint8_t crc8(uint8_t *buf, uint8_t len); //CRC8У��
};

#endif

