
#include <SPI.h>
#include "nRF24L01_STM32.h"
#include "RF24_STM32.h"
//#include "printf.h"
//#include <Adafruit_GFX_STM32.h>
#include <JM_SSD1306_STM32.h>

SPIClass SPI_3(1);
JM_SSD1306_STM32 display(&SPI_3);

SPIClass SPI_2(2);
byte addresses[][6] = {{"1Node"},{"2Node"}};
volatile boolean role;
volatile boolean radioNumber;
RF24_STM32 radio(PA9, PA8, &SPI_2);

void setup(){
  Serial.begin(115200);

  afio_cfg_debug_ports(AFIO_DEBUG_SW_ONLY); // PB3 free
  afio_remap(AFIO_REMAP_SPI1);

  gpio_set_mode (GPIOB, 3, GPIO_AF_OUTPUT_PP);
  gpio_set_mode (GPIOB, 4, GPIO_INPUT_FLOATING);
  gpio_set_mode (GPIOB, 5, GPIO_AF_OUTPUT_PP);
  display.begin(SSD1306_SWITCHCAPVCC);
  /*
  display.clearDisplay();
  display.setCursor(0,0);
  display.setTextSize(0);
  display.setTextColor(WHITE, BLACK);
  display.print("Hello World!");
  display.display();
  */
  
  role = false;
  radioNumber = false;
  radio.begin();
  //printf_begin();
  radio.setChannel(10);
  radio.setPALevel(RF24_PA_MIN);
  radio.setDataRate(RF24_250KBPS);
  radio.setCRCLength(RF24_CRC_8);
  radio.setPayloadSize(32);
  radio.setAddressWidth(5);
  radio.printDetails();
  Serial.println("*** PRESS 'T' to begin transmitting to the other node");
  if (radioNumber) {
    radio.openWritingPipe(addresses[1]);
    radio.openReadingPipe(1, addresses[0]);

  } else {
    radio.openWritingPipe(addresses[0]);
    radio.openReadingPipe(1, addresses[1]);

  }
  radio.startListening();
}

void loop(){
  if (role) {
    radio.stopListening();
    Serial.println("Now sending");
    unsigned long start_time = micros();
    if (!radio.write(&start_time, sizeof(unsigned long), false)) {
      Serial.println("failed");

    }
    radio.startListening();
    unsigned long started_waiting_at = micros();
    boolean timeout = false;
    while (!radio.available()) {
      if (micros() - started_waiting_at > 20000) {
        timeout = true;
        break;

      }
    }
    if (timeout) {
      Serial.println("Failed, response timed out.");

    } else {
      unsigned long got_time;
      radio.read(&got_time, sizeof(unsigned long));
      unsigned long end_time = micros();
      /*
      display.clearDisplay();
      Serial.print("Sent ");
      Serial.print(start_time);
      Serial.print(", Got response ");
      Serial.print(got_time);
      Serial.print(", Round-trip delay ");
      Serial.print((end_time - start_time));
      Serial.println(" microseconds");
      display.setCursor(0,0);
      display.setTextSize(0);
      display.setTextColor(WHITE, BLACK);
      display.print(got_time);
      display.display();
      */

    }
    delay(1000);

  } else {
    unsigned long got_time;
    if (radio.available()) {
      while (radio.available()) {
        radio.read(&got_time, sizeof(unsigned long));
      }
      radio.stopListening();
      radio.write(&got_time, sizeof(unsigned long), false);
      radio.startListening();
      Serial.print("Sent response ");
      Serial.println(got_time);

    }

  }
  if (Serial.available() > 0) {
    char c = Serial.read();
    if (c == 'T' && role == 0) {
      Serial.println("*** CHANGING TO TRANSMIT ROLE -- PRESS 'R' TO SWITCH BACK");
      role = 1;
      radio.openWritingPipe(addresses[0]);
      radio.openReadingPipe(1, addresses[1]);

    } else if (c == 'R' && role == 1) {
      Serial.println("*** CHANGING TO RECEIVE ROLE -- PRESS 'T' TO SWITCH BACK");
      role = 0;
      radio.openWritingPipe(addresses[1]);
      radio.openReadingPipe(1, addresses[0]);
      radio.startListening();
    }

  }

}
