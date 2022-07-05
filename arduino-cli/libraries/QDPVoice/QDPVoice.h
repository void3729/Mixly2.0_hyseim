#ifndef QDPVoice_h
#define QDPVoice_h
void VoiceSendData(uint8_t addr,uint8_t pin){
	pinMode(pin, OUTPUT);
	int i;
	digitalWrite(pin , LOW);
	delay(3); //>2ms
	for(i=0; i<8; i++){
	digitalWrite(pin, HIGH);
	if(addr&1){
	  delayMicroseconds(2400); //>2400us
	  digitalWrite(pin, LOW);
	  delayMicroseconds(800);
	} //>800us
	else{
	  delayMicroseconds(800); //>800us
	  digitalWrite(pin, LOW);
	  delayMicroseconds(2400);
	} //>2400us
	addr>>=1;
	}
	digitalWrite(pin, HIGH);
}


template<typename F>
void VoicePlayValue(F f,uint8_t pin) {
  //转化字符串
  String str = String(f);
  int len = str.length();
  // Serial.println(str);
  //是否有负号
  if (str[0] == '-') {
    VoiceSendData(67, pin);//读出负号
    delay(500);
    str = str.substring(1, len);
  }
  //分离整数小数
  String str1, str2;
  int PointIndex = str.indexOf('.');
  if (PointIndex == -1) {
    str1 = str;
  }
  else {
    str1 = str.substring(0, PointIndex);
    str2 = str.substring(PointIndex + 1, len + 1);
  }
  // Serial.println(str1);
  // Serial.println(str2);
  //Serial.println(str1[0],DEC);
  //读整数
  int strlen1 = str1.length();
//  Serial.println(strlen1);

  for (int i = 0; i < strlen1; i++) {
    if (isDigit(str1[i]) && (str1[i] != '0')) {
      VoiceSendData(str1[i] - 30, pin);
      delay(400);
      int a = (strlen1 - i-1) % 4 == 0 ? 4 : (strlen1 - i-1) % 4;
      // Serial.println(a);
      if ((strlen1 - i)> 1) { //不是个位
        VoiceSendData(27 + a, pin);
        delay(500);
      }
    }
  }
  if (str2.length()) {
    VoiceSendData(32, pin);//读出点
    delay(500);
    int strlen2 = str2.length();
    for (int i = 0; i < strlen2; i++) {
      if (isDigit(str2[i])) {
        VoiceSendData(str2[i] - 30, pin);
        delay(400);
      }
    }
  }
}

#endif
