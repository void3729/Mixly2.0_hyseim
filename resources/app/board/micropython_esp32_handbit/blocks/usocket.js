//'use strict';

//goog.provide('Blockly.Blocks.mpython');
//goog.require('Blockly.Blocks');


// socket 从socket中读取size字节。返回一个字节对象
Blockly.Blocks['mpython_usocket_read'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_USOCKET_READ_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_USOCKET_READ_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_USOCKET_READ_MESSAGE0,
            "args0": [
                {
                    "type": "field_input",
                    "name": "socket_name",
                    "text": "s"
                }
                ,
                {
                    //"check": "Number",
                    "type": "input_value",
                    "name": "size"
                }
            ]
        });
    }
};

// socket 为阻塞模式
Blockly.Blocks['mpython_usocket_setblocking'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_USOCKET_SETBLOCKING_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_USOCKET_SETBLOCKING_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_USOCKET_SETBLOCKING_MESSAGE0,
            "args0": [
                {
                    "type": "field_input",
                    "name": "socket_name",
                    "text": "s"
                }
                ,
                {
                    "options": [
                        [Blockly.Msg.MPYTHON_USOCKET_BLOCK, 'True'],
                        [Blockly.Msg.MPYTHON_USOCKET_UNBLOCK, 'False']
                    ],
                    "type": "field_dropdown",
                    "name": "mode"
                }
            ]
        });
    }
};

// socket 设置超时时间，单位：秒。
Blockly.Blocks['mpython_usocket_settimeout'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output":null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_USOCKET_SETTIMEOUT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_USOCKET_SETTIMEOUT_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_USOCKET_SETTIMEOUT_MESSAGE0,
            "args0": [
                {
                    "type": "field_input",
                    "name": "socket_name",
                    "text": "s"
                }
                ,
                {
                    //"check": "Number",
                    "type": "input_value",
                    "name": "_nums"
                }
            ]
        });
    }
};

// 转义字符
Blockly.Blocks['mpython_text_ESC'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": null,
            "colour": Blockly.Blocks.texts.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_TEXT_ESC_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_TEXT_ESC_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_TEXT_ESC_MESSAGE0,
            "args0": [
                {
                    "options": [
                        ['\\n', '\\n'],
                        ['\\n\\n', '\\n\\n'],
                        ['\\r', '\\r'],
                        ['\\r\\n', '\\r\\n'],
                        ['\\b', '\\b'],
                        ['\\t', '\\t'],
                        ['\\\\', '\\\\']

                    ],
                    "type": "field_dropdown",
                    "name": "mode"
                }
            ]
        });
    }
};

// socket 接收数据，返回接收到的数据对象。
Blockly.Blocks['mpython_usocket_recv'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_USOCKET_RECV_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_USOCKET_RECV_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_USOCKET_RECV_MESSAGE0,
            "args0": [
                {
                    "type": "field_input",
                    "name": "socket_name",
                    "text": "s"
                }
                ,
                {
                    //"check": "Number",
                    "type": "input_value",
                    "name": "_nums"
                }
            ]
        });
    }
};

// socket 接收数据，返回接收到的数据对象元组，格式：(bytes, address)
Blockly.Blocks['mpython_usocket_recvfrom'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_USOCKET_RECVFROM_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_USOCKET_RECVFROM_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_USOCKET_RECVFROM_MESSAGE0,
            "args0": [
                {
                    "type": "field_input",
                    "name": "socket_name",
                    "text": "s"
                }
                ,
                {
                    //"check": "Number",
                    "type": "input_value",
                    "name": "_nums"
                }
            ]
        });
    }
};

// 与 send() 此不同，此方法将尝试通过连续发送数据块来发送所有数据。
Blockly.Blocks['mpython_usocket_sendall'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_USOCKET_SENDALL_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_USOCKET_SENDALL_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_USOCKET_SENDALL_MESSAGE0,
            "args0": [
                {
                    "type": "field_input",
                    "name": "socket_name",
                    "text": "s"
                }
                ,
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "_bytes"
                }
            ]
        });
    }
};

// socket 发送数据，并返回发送的字节数2
Blockly.Blocks['mpython_usocket_sends'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            //"output": null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_USOCKET_SENDS_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_USOCKET_SENDS_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_USOCKET_SENDS_MESSAGE0,
            "args0": [
                {
                    "type": "field_input",
                    "name": "socket_name",
                    "text": "s"
                }
                ,
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "_bytes"
                }
            ]
        });
    }
};

// socket 发送数据，并返回发送的字节数
Blockly.Blocks['mpython_usocket_send'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_USOCKET_SEND_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_USOCKET_SEND_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_USOCKET_SEND_MESSAGE0,
            "args0": [
                {
                    "type": "field_input",
                    "name": "socket_name",
                    "text": "s"
                }
                ,
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "_bytes"
                }
            ]
        });
    }
};

// socket 发送数据到指定地址，并返回发送的字节数
Blockly.Blocks['mpython_usocket_sendto'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_USOCKET_SENDTO_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_USOCKET_SENDTO_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_USOCKET_SENDTO_MESSAGE0,
            "args0": [
                {
                    "type": "field_input",
                    "name": "socket_name",
                    "text": "s"
                },
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "_bytes"
                },
                {
                    //"check": "Array",
                    "type": "input_value",
                    "name": "_address"
                }
            ]
        });
    }
};

// socket 连接到指定地址的服务器
Blockly.Blocks['mpython_usocket_connect'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_USOCKET_CONNECT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_USOCKET_CONNECT_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_USOCKET_CONNECT_MESSAGE0,
            "args0": [
                {
                    "type": "field_input",
                    "name": "socket_name",
                    "text": "s"
                }
                ,
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "host"
                }
                ,
                {
                    //"check": "Number",
                    "type": "input_value",
                    "name": "port"
                }
            ]
        });
    }
};

// socket 解析 host 并返回 host
Blockly.Blocks['mpython_usocket_getaddrinfo'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'String',
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_USOCKET_GETADDRINFO_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_USOCKET_GETADDRINFO_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_USOCKET_GETADDRINFO_MESSAGE0,
            "args0": [
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "host"
                }
                ,
                {
                    //"check": "Number",
                    "type": "input_value",
                    "name": "port"
                }
            ]
        });
    }
};

// socket 接收连接请求并返回socket元组
Blockly.Blocks['mpython_usocket_accept'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Array',
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_USOCKET_ACCEPT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_USOCKET_ACCEPT_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_USOCKET_ACCEPT_MESSAGE0,
            "args0": [
                {
                    "type": "field_input",
                    "name": "socket_name",
                    "text": "s"
                }
            ]
        });
    }
};

// socket监听
Blockly.Blocks['mpython_usocket_listen'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_USOCKET_LISTEN_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_USOCKET_LISTEN_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_USOCKET_LISTEN_MESSAGE0,
            "args0": [
                {
                    "type": "field_input",
                    "name": "socket_name",
                    "text": "s"
                }
                ,
                {
                    //"check": "Number",
                    "type": "input_value",
                    "name": "backlog"
                }
            ]
        });
    }
};

// socket綁定
Blockly.Blocks['mpython_usocket_bind'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_USOCKET_BIND_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_USOCKET_BIND_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_USOCKET_BIND_MESSAGE0,
            "args0": [
                {
                    "type": "field_input",
                    "name": "socket_name",
                    "text": "s"
                }
                ,
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "address"
                }
                ,
                {
                    //"check": "Number",
                    "type": "input_value",
                    "name": "port"
                }
            ]
        });
    }
};

// socket关闭
Blockly.Blocks['mpython_usocket_close'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_USOCKET_CLOSE_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_USOCKET_CLOSE_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_USOCKET_CLOSE_MESSAGE0,
            "args0": [
                {
                    "type": "field_input",
                    "name": "socket_name",
                    "text": "s"
                }
            ]
        });
    }
};

// usocket实例化
Blockly.Blocks['mpython_usocket_init'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output":'Number',
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_USOCKET_INIT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_USOCKET_INIT_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_USOCKET_INIT_MESSAGE0,
            "args0": [
                {
                    "type": "field_input",
                    "name": "socket_name",
                    "text": "s"
                }
                ,
                {
                    "options": [
                        ['AF_INET', 'AF_INET'],
                        ['AF_INET6', 'AF_INET6']
                    ],
                    "type": "field_dropdown",
                    "name": "af"
                }
                ,
                {
                    "options": [
                        ['SOCK_STREAM', 'SOCK_STREAM'],
                        ['SOCK_DGRAM', 'SOCK_DGRAM'],
                        ['SOCK_RAW', 'SOCK_RAW'],
                        ['SO_REUSEADDR', 'SO_REUSEADDR']
                    ],
                    "type": "field_dropdown",
                    "name": "_type"
                }
            ]
        });
    }
};

// setsockopt实例化
Blockly.Blocks['mpython_usocket_setsockopt'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output":'Number',
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_USOCKET_SETSOCKOPT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_USOCKET_SETSOCKOPT_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_USOCKET_SETSOCKOPT_MESSAGE0,
            "args0": [
                {
                    "type": "field_input",
                    "name": "socket_name",
                    "text": "s"
                }
                ,
                {
                    "options": [
                        ['SOCK_STREAM', 'SOCK_STREAM'],
                        ['SOCK_DGRAM', 'SOCK_DGRAM'],
                        ['SOCK_RAW', 'SOCK_RAW'],
                        ['SO_REUSEADDR', 'SO_REUSEADDR']
                    ],
                    "type": "field_dropdown",
                    "name": "_type"
                }
                ,
                {
                    //"check": "Number",
                    "type": "input_value",
                    "name": "value"
                }
            ]
        });
    }
};


// get/post请求
Blockly.Blocks['mpython_get_post'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
            // "output":'Boolean',
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_GET_POST_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_GET_POST_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_GET_POST_MESSAGE0,
            "args0": [
                {
                    "options": [
                        ['get', 'get'],
                        ['post', 'post']
                    ],
                    "type": "field_dropdown",
                    "name": "get_post"
                }
                ,
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "url"
                }
                // ,
                // {
                // "type": "input_value",
                // "name": "data"
                // }
                ,
                {
                    "type": "input_value",
                    "name": "json"
                }
                // ,
                // {
                // //"check": "Array",
                // "type": "input_value",
                // "name": "headers"
                // }
            ]
        });
    }
};

// get/post 请求
Blockly.Blocks['mpython_urequests_get_post'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_UREQUESTS_GET_POST_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_UREQUESTS_GET_POST_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_UREQUESTS_GET_POST_MESSAGE0,
            "args0": [
                {
                    "options": [
                        ['Get', 'get'],
                        ['Post', 'post']
                    ],
                    "type": "field_dropdown",
                    "name": "method"
                },
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "url"
                },
                {
                    "type": "input_value",
                    "name": "json"
                }
            ]
        });
    }
};

// post 文件
Blockly.Blocks['mpython_urequests_post_file'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_UREQUESTS_POST_FILE_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_UREQUESTS_POST_FILE_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_UREQUESTS_POST_FILE_MESSAGE0,
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "url"
                },
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "file_name"
                },
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "file_type"
                },
                {
					//"check": "Array",
                    "type": "input_value",
                    "name": "json"
                }
            ]
        });
    }
};

// 响应内容
Blockly.Blocks['mpython_response'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_RESPONSE_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_RESPONSE_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_RESPONSE_MESSAGE0,
            "args0": [
                {
                    "options": [
                        [Blockly.Msg.TEXT, 'text'],
                        [Blockly.Msg._BYTE, 'content'],
                        [Blockly.Msg.DICT_CREATE_WITH_CONTAINER_TITLE_ADD, 'json()']
                    ],
                    "type": "field_dropdown",
                    "name": "response"
                }
                // ,
                // {
                // //"check": "String",
                // "type": "input_value",
                // "name": "url"
                // }
            ]
        });
    }
};

// 响应属性
Blockly.Blocks['mpython_response_attribute'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_RESPONSE_ATTRIBUTE_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_RESPONSE_ATTRIBUTE_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_RESPONSE_ATTRIBUTE_MESSAGE0,
            "args0": [
                {
                    "options": [
                        ['encoding', 'encoding'],
                        ['status code', 'status_code'],
                        ['reason', 'reason']
                    ],
                    "type": "field_dropdown",
                    "name": "response_attribute"
                }
                // ,
                // {
                // //"check": "String",
                // "type": "input_value",
                // "name": "url"
                // }
            ]
        });
    }
};