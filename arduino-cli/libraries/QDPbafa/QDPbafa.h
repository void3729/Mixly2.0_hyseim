#ifndef QDPbafa_H
#define QDPbafa_H

/******************************************************************************************************
                        ESP8266通过浏览器模式设置WiFi帐号及密码
  上电后前60秒会自动连接上次设置好的路由器帐号/密码信息,此时模块不发出热点,一分钟水如果没有连接上则
  自动创建ROBOT-xxx的热点(密码为:qdprobot)
  如果已连接上路由器想更改路由信息请关闭之前的路由器过一分钟后模块再次发出热点此时再连接模块进行设置
  连上模块热点后在手机浏览器网址栏输入 9.9.9.9 来进行WEB服务器模式的帐号及密码以及授时服务器的设置

  串口波特率为 115200

  /********************************************************************************************************************/


    #include <ESP8266WiFi.h>
   #include <ESP8266WebServer.h>
    #define offset 100 




#include <WiFiClient.h>


#include <WiFiUdp.h>
#include <EEPROM.h>

typedef void (*pf)(String);
void bafaDataCompare(String DATA); 

/*************************************************************************************************************************/
#define TCP_SERVER_ADDR "bemfa.com"     //巴法云服务器地址默认即可 139.159.163.215
//#define TCP_SERVER_PORT "8340"        //服务器端口，TCP设备云端口8340
#define TCP_SERVER_PORT "8344"          //服务器端口，TCP创客云端口8344
#define led  2   //ESP8266板载led引脚GPIO2
/*************************************************************************************************************************/
#define MAX_PACKETSIZE    2048           //最大字节数
#define KEEPALIVEATIME    30 * 1000      //设置心跳值30s
//tcp客户端相关初始化，默认即可
WiFiClient TCPclient;
String TcpClient_Buff = "";
unsigned int TcpClient_BuffIndex = 0;
unsigned long TcpClient_preTick = 0;
unsigned long preHeartTick = 0;          //心跳
unsigned long preTCPStartTick = 0;       //连接
bool preTCPConnected = false;

struct CONFIG //结构单元
{
  char ssid[32];
  char pass[32];
  char t_opic[32];
  char uid[33];
  char use;
  char pin;
} eepRom;
/********************************************************************************************************************/
//用户私钥，可在控制台获取,修改为自己的UID
String Topic;                                       //主题名字，可在控制台新建
String Uuid;                                        //用户密匙
/********************************************************************************************************************/
#define HOST_NAME  "ROBOT"
String AP_ssid;                         //模块SSID前名称为ROBOT_
const String AP_pass = "qdprobot";      //服务器模式下的密码
/********************************************************************************************************************/
ESP8266WebServer server(80);
/********************************************************************************************************************/
IPAddress softLocal(9, 9, 9, 9);
IPAddress softGateway(9, 9, 9, 9);
IPAddress softSubnet(255, 255, 255, 0);
/********************************************************************************************************************/
String html_T = "<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width,initial-scale=1'charset='utf-8'/><style type='text/css'>h2{text-transform: uppercase}</style><style type='text/css'>.tj{color:#ff0000;}</style><title>WiFi_Settings</title></head><body align='center'style='background-color:#FF9900'><body>";
String html_W = "<br><br><br><br><br><br><div align='center'><a href='mailto:39589406@qq.com'>帮助</a>&nbsp&nbsp&nbsp<a href='http://www.qdprobot.com'>齐护教育机器人</a></div></div></form></body></html>";
String br2 = "<br><br>";
/********************************************************************************************************************/
void handleRootGet()
{
  String html = "";
  html += html_T + "<h2><font color='red'>" + AP_ssid + "_Config</font></h2>";
  html += "<hr/>";
  html += "<p>";
  html += "<font color='green'>密码SSID <= 32位,PWD <= 64位,不支持中文!</font>";
  html += "<p/>";
  html += "<hr/>";
  html += "<form method='post'>";
  html += "网络名称(SSID):<input name='ssid'maxlength=32 value=''>";
  html += "<br>";
  html += "<br>";
  html += "连接密码(PWD):<input type='password'name='pass'maxlength=32 value=''>";
  html += "<hr/>";
  html += "<h5><font color='red'>当前设备主题(Current Topic): " + Topic + "</font></h5>";
  html += "<h5><font color='red'>当前用户密匙(Current UID): " + Uuid + "</font></h5>";
  html += "<hr/>";
  html += "新设备主题(New Topic):<input name='t_opic'maxlength=32 value=''>";
  html += "<br>";
  html += "新用户密匙(New UID):<input name='uid'maxlength=32 value=''>";
  html += "<hr/>";
  html += "<input type='submit'value='保存设置(Save)'style='width:150px;height:50px;font-size:18px;'class='tj'onclick='return confirm';>";
  html += html_W;
  server.send(200, "text/html", html);
}
/********************************************************************************************************************/
void setup_client()
{
  unsigned char i;
  String Bssid = eepRom.ssid;
  String Bpass = eepRom.pass;
  String Bt_opic = eepRom.t_opic;
  String Buid = eepRom.uid;
  Bssid.trim();
  Bpass.trim();
  Bt_opic.trim();
  Buid.trim();
  Serial.println("RouterSsid: " + Bssid);
  Serial.println("RouterPass: " + Bpass);
  Serial.println("Topic: " + Bt_opic);
  Serial.println("UID: " + Buid);
  Topic = Bt_opic.c_str();
  Uuid = Buid.c_str();
  WiFi.mode(WIFI_AP_STA);
  WiFi.begin(Bssid.c_str(), Bpass.c_str());
  for (i = 0; (i < 61 && (WiFi.status() != WL_CONNECTED)); i++)
  {
    delay(500);
    server.handleClient();
    Serial.printf("-> %d\r\n", i);
    if (i >= 60)
    {
      Serial.println("Connection timeout");//
    }
  }
}

/********************************************************************************************************************/
void handleRootPost()
{
  String Assid = server.arg("ssid");
  String Apass = server.arg("pass");
  String At_opic = server.arg("t_opic");
  String Auid = server.arg("uid");
  Assid.trim();
  Apass.trim();
  At_opic.trim();
  Auid.trim();
  strcpy(eepRom.ssid, Assid.c_str());
  strcpy(eepRom.pass, Apass.c_str());
  strcpy(eepRom.t_opic, At_opic.c_str());
  strcpy(eepRom.uid, Auid.c_str());
  EEPROM.put<CONFIG>(0, eepRom);
  EEPROM.commit();
  String html = "";
  html += html_T + "<h2><font color='blue'>配置结果Config Results</font></h2>";
  html += "<hr/>";
  html += "</p>";
  html += "<h4>网络名称(SSID):" + Assid + "</h4>";
  html += "</p>";
  html += "<h4>连接密码(PWD):" + Apass + "</h4>";
  html += "</p>";
  html += "<h4>设备主题(Topic):" + At_opic + "</h4>";
  html += "<h4>用户密匙(UID):" + Auid + "</h4>";
  html += br2 + br2 + br2 + br2 + html_W;
  server.send(200, "text/html", html);
  setup_client();
}

/********************************************************************************************************************/
void setup_server()
{
   WiFi.disconnect();           
    WiFi.softAPConfig(softLocal,softGateway,softSubnet);
    char temp[32];
    //uint8_t mac[6];
    //WiFi.macAddress(mac); 
    //sprintf(temp,"%s-%02X%02X%02X",HOST_NAME,mac[3],mac[4],mac[5]);
    sprintf(temp,"%s",HOST_NAME);
    AP_ssid = temp;
    WiFi.softAP(AP_ssid.c_str(),AP_pass.c_str());
    Serial.println("ModuleSsid: " + AP_ssid);
    Serial.println("ModulePass: " + AP_pass);    
    server.on("/",HTTP_GET,handleRootGet);
    server.on("/",HTTP_POST,handleRootPost);
    server.begin();
    Serial.println("Server Started.");
  }  

  /*************************************************************************************************************************/
void sendtoTCPServer(String p)
{
  if(!TCPclient.connected()) 
    {
        Serial.println("Client is not readly");
        return;
    }
    TCPclient.print(p);
    Serial.println("[Send Data ->]");
    Serial.println(p);
}

void startTCPClient()
{
  
    if(TCPclient.connect(TCP_SERVER_ADDR,atoi(TCP_SERVER_PORT)))
    {
        Serial.print("\nConnected to server:");
        Serial.printf("%s:%d\r\n",TCP_SERVER_ADDR,atoi(TCP_SERVER_PORT));
        String tcpTemp = "";
        tcpTemp += "cmd=1&uid=" + Uuid + "&topic="+ Topic + "\r\n";                        
        sendtoTCPServer(tcpTemp);                           
        preTCPConnected = true;
        preHeartTick = millis();
        TCPclient.setNoDelay(true);
    }
    else
    {
        Serial.print("Failed connected to server:");
        Serial.println(TCP_SERVER_ADDR);
        TCPclient.stop();
        preTCPConnected = false;
    }
    preTCPStartTick = millis();
}
/*************************************************************************************************************************
  WiFiTick
  检查是否需要初始化WiFi
  检查WiFi是否连接上，若连接成功启动TCP Client
  控制指示灯
  /*************************************************************************************************************************/
void doWiFiTick()
{
 static bool taskStarted = false;
    static uint32_t lastWiFiCheckTick = 0;   
    if(WiFi.status() != WL_CONNECTED) 
    {
        if(millis() - lastWiFiCheckTick > 1000) 
        {
            lastWiFiCheckTick = millis();
            WiFi.mode(WIFI_AP_STA);
        }
    } 
    else 
    {
        WiFi.mode(WIFI_STA);
        if(taskStarted == false) 
        {
            taskStarted = true;
            Serial.print("\r\nGet IP Address: ");
            Serial.println(WiFi.localIP());
            startTCPClient();
    }
  }
}

/*************************************************************************************************************************/

/*检查数据，发送心跳*/
void doTCPClientTick(pf f)
{   
    String tcpTemp = "";
    if(WiFi.status() != WL_CONNECTED)
        return;
    if(!TCPclient.connected())
    {
        if(preTCPConnected == true)
        {
            preTCPConnected = false;
            preTCPStartTick = millis();
            Serial.println();
            Serial.println("TCP Client disconnected.");
            TCPclient.stop();
        }
        else 
            if(millis() - preTCPStartTick > 1 * 1000)
        startTCPClient();
    }
    else
    {
        if(TCPclient.available())
        {
            char c = TCPclient.read();
            TcpClient_Buff += c;
            TcpClient_BuffIndex++;
            TcpClient_preTick = millis();
            if(TcpClient_BuffIndex >= MAX_PACKETSIZE - 1)
            {
                TcpClient_BuffIndex = MAX_PACKETSIZE - 2;
                TcpClient_preTick = TcpClient_preTick - 200;
            }
            preHeartTick = millis();
        }
        if(millis() - preHeartTick >= KEEPALIVEATIME)
        {
            preHeartTick = millis();        
            Serial.println("--Keep alive:");
            sendtoTCPServer("cmd=0&msg=keep\r\n");  
        }
    }
    /*接收从巴法云平台发送过来的数据，并赋值给变量DATA，控制ESP板载灯的亮灭*/
    if((TcpClient_Buff.length() >= 1) && (millis() - TcpClient_preTick >= 200))
    {
        TCPclient.flush();
        String DATA = TcpClient_Buff;
        Serial.println("[Receive Data]");            
        Serial.println(DATA);
        // if((DATA.indexOf("on") != -1))
        // {
        //     digitalWrite(led,LOW);
        //     Serial.println("on");
        // }
        // else if((DATA.indexOf("off") !=-1))
        // {
        //    digitalWrite(led,HIGH);
        //    Serial.println("off");
        // }
        f(DATA);
        TcpClient_Buff = ""; 
        TcpClient_BuffIndex = 0;
    }
}
/*************************************************************************************************************************/

void bafaSetup()
{   
    pinMode(led,OUTPUT);
    digitalWrite(led,HIGH);
    EEPROM.begin(131);
    EEPROM.get<CONFIG>(0,eepRom); //读取EEPROM的连网信息
    // Serial.begin(115200);
    Serial.println();
    Serial.printf("Heap size:%d\r\n", ESP.getFreeHeap()); //获取可用堆大小
    Serial.println("Welcome TO http://www.qdprobot.com");  
    setup_server();      
    setup_client();     
 }
void bafaLoop()
{
    server.handleClient(); //检查有没有客户端设备通过网络向ESP8266网络服务器发送请求
    doWiFiTick();
    doTCPClientTick(bafaDataCompare);  
}
   

/********************************************************************************************************************/

#endif
