#include <QH_IOT_PRO.h>

QH_IOT_PRO::QH_IOT_PRO():Adafruit_MCP23017()
{


}
void QH_IOT_PRO::init()
{
	begin(0x00);
	//声明电机引脚为output
	Adafruit_MCP23017::pinMode(M1DIR1, OUTPUT);
	Adafruit_MCP23017::pinMode(M1DIR2, OUTPUT);
	Adafruit_MCP23017::pinMode(M2DIR1, OUTPUT);
	Adafruit_MCP23017::pinMode(M2DIR2, OUTPUT);
	Adafruit_MCP23017::pinMode(M3DIR1, OUTPUT);
	Adafruit_MCP23017::pinMode(M3DIR2, OUTPUT);
	Adafruit_MCP23017::pinMode(M4DIR1, OUTPUT);
	Adafruit_MCP23017::pinMode(M4DIR2, OUTPUT);
	//PWM引脚初始化
	::pinMode(M1PWM, OUTPUT);
	::pinMode(M2PWM, OUTPUT);
	::pinMode(M3PWM, OUTPUT);
	::pinMode(M4PWM, OUTPUT);
	//编码器引脚初始化

}

void QH_IOT_PRO::motorRun(uint8_t No,int speed)
{
	bool dir1 ,dir2;
	int _speed=abs(speed);

	if(speed==0){
		dir1 = false;
		dir2 = false;
	}else if(speed<0){
		dir1 = true;
		dir2 = false;
	}else{
		dir1 = false;
		dir2 = true;
	}
		
	switch(No){
		case 1:
			Adafruit_MCP23017::digitalWrite(M1DIR1, dir1);
			Adafruit_MCP23017::digitalWrite(M1DIR2, dir2);
			::analogWrite(M1PWM, _speed);
			break;
		case 2:
			Adafruit_MCP23017::digitalWrite(M2DIR1, dir1);
			Adafruit_MCP23017::digitalWrite(M2DIR2, dir2);
			::analogWrite(M2PWM, _speed);
			break;
		case 3:
			Adafruit_MCP23017::digitalWrite(M3DIR1, dir1);
			Adafruit_MCP23017::digitalWrite(M3DIR2, dir2);
			::analogWrite(M3PWM, _speed);
			break;
		case 4:
			Adafruit_MCP23017::digitalWrite(M4DIR1, dir1);
			Adafruit_MCP23017::digitalWrite(M4DIR2, dir2);
			::analogWrite(M4PWM, _speed);
			break;
	}
	
}

void QH_IOT_PRO::motorBrake(uint8_t No)
{		
	switch(No){
		case 1:
			Adafruit_MCP23017::digitalWrite(M1DIR1, true);
			Adafruit_MCP23017::digitalWrite(M1DIR2, true);
			::analogWrite(M1PWM, 0);
			break;
		case 2:
			Adafruit_MCP23017::digitalWrite(M2DIR1, true);
			Adafruit_MCP23017::digitalWrite(M2DIR2, true);
			::analogWrite(M2PWM, 0);
			break;
		case 3:
			Adafruit_MCP23017::digitalWrite(M3DIR1, true);
			Adafruit_MCP23017::digitalWrite(M3DIR2, true);
			::analogWrite(M3PWM, 0);
			break;
		case 4:
			Adafruit_MCP23017::digitalWrite(M4DIR1, true);
			Adafruit_MCP23017::digitalWrite(M4DIR2, true);
			::analogWrite(M4PWM, 0);
			break;
	}
	
}

bool QH_IOT_PRO::getLineSensorState(uint8_t data)
{
	uint8_t val=0;
	for(int8_t i = 4;i>=0;i--)
		val = (val<<1)|(Adafruit_MCP23017::digitalRead(i));
	return data==val;
}