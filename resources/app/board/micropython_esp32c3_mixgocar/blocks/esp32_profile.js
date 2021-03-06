var profile = {
    esp32: {
        description: "MicroPython[ESP32]",
        digital_pin: [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"],["7", "7"],["8", "8"],["9", "9"],["10", "10"], ["20", "20"], ["21", "21"]],
        digital: [["pin0", "pin0"], ["pin1", "pin1"], ["pin2", "pin2"], ["pin3", "pin3"], ["pin4", "pin4"], ["pin5", "pin5"], ["pin6", "pin6"],["pin7", "pin7"],["pin8", "pin8"],["pin9", "pin9"],["pin10", "pin10"], ["pin20", "pin20"], ["pin21", "pin21"]],
        pwm_pin: [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"],["7", "7"],["8", "8"],["9", "9"],["10", "10"], ["20", "20"], ["21", "21"]],
        pwm: [["pwm0", "pwm0"], ["pwm1", "pwm1"], ["pwm2", "pwm2"], ["pwm3", "pwm3"], ["pwm4", "pwm4"], ["pwm5", "pwm5"], ["pwm6", "pwm6"],["pwm7", "pwm7"],["pwm8", "pwm8"],["pwm9", "pwm9"],["pwm10", "pwm10"], ["pwm20", "pwm20"], ["pwm21", "pwm21"]],
        // pwm_input: [["pwm2", "pwm2"], ["pwm4", "pwm4"], ["pwm5", "pwm5"], ["pwm7", "pwm7"],["pwm8", "pwm8"],["pwm12", "pwm12"], ["pwm13", "pwm13"], ["pwm14", "pwm14"], ["pwm15", "pwm15"], ["pwm19", "pwm19"], ["pwm20", "pwm20"], ["pwm21", "pwm21"], ["pwm22", "pwm22"], ["pwm25", "pwm25"], ["pwm26", "pwm26"], ["pwm27", "pwm27"], ["pwm32", "pwm32"],["pwm33", "pwm33"], ["pwm34", "pwm34"], ["pwm35", "pwm35"], ["pwm36", "pwm36"],["pwm37", "pwm37"], ["pwm38", "pwm38"], ["pwm39", "pwm39"]],
        // analog_input: [["adc0", "adc0"], ["adc1", "adc1"], ["adc2", "adc2"],["adc3", "adc3"], ["adc4", "adc4"], ["adc5", "adc5"]],        
        // pwm_output: [["pwm2", "pwm2"], ["pwm4", "pwm4"], ["pwm5", "pwm5"], ["pwm7", "pwm7"],["pwm8", "pwm8"],["pwm12", "pwm12"], ["pwm13", "pwm13"], ["pwm14", "pwm14"], ["pwm15", "pwm15"], ["pwm19", "pwm19"], ["pwm20", "pwm20"], ["pwm21", "pwm21"], ["pwm22", "pwm22"], ["pwm25", "pwm25"], ["pwm26", "pwm26"], ["pwm27", "pwm27"], ["pwm32", "pwm32"],["pwm33", "pwm33"]],
        // analog_output: [["adc0", "adc0"], ["adc1", "adc1"], ["adc2", "adc2"],["adc3", "adc3"], ["adc4", "adc4"], ["adc5", "adc5"]],        
        i2c_A_pin: [["6", "6"], ["9", "9"]],
        i2c_B_pin: [["7", "7"], ["10", "10"]],
        spi_A_pin: [["6", "6"], ["9", "9"]],
        spi_B_pin: [["7", "7"], ["10", "10"]],
        spi_C_pin: [["9", "9"], ["20", "20"]],
        spi_D_pin: [["10", "10"], ["21", "21"]],
        analog_pin: [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"]],
        analog: [["adc0", "adc0"], ["adc1", "adc1"], ["adc2", "adc2"], ["adc3", "adc3"], ["adc4", "adc4"]],
        dac_pin: [["25", "25"], ["26", "26"]],
        dac: [["dac25", "dac25"], ["dac26", "dac26"]],
        touch: [["tc0", "tc0"], ["tc2", "tc2"], ["tc4", "tc4"], ["tc12", "tc12"], ["tc13", "tc13"], ["tc14", "tc14"], ["tc15", "tc15"], ["tc27", "tc27"], ["tc32", "tc32"], ["tc33", "tc33"]],
        touch_pin: [["0", "0"], ["2", "2"], ["4", "4"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["27", "27"], ["32", "32"], ["33", "33"]],
        button:[["A", "button_a"], ["B", "button_b"]],
        axis:[["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"]],
        exlcdh:[["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"],["10", "10"], ["11", "11"],["12", "12"], ["13", "13"],["14", "14"], ["15", "15"],["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"], ["25", "25"],["26", "26"], ["27", "27"],["28", "28"], ["29", "29"],["30", "30"], ["31", "31"]],
        exlcdv:[["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"],["10", "10"], ["11", "11"]],
        brightness:[["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"]],
        builtinimg: [["HEART", "matrix.Image.HEART"],["HEART_SMALL", "matrix.Image.HEART_SMALL"],["HAPPY", "matrix.Image.HAPPY"],["SAD", "matrix.Image.SAD"],["SMILE", "matrix.Image.SMILE"],["SILLY", "matrix.Image.SILLY"],["FABULOUS", "matrix.Image.FABULOUS"],["SURPRISED", "matrix.Image.SURPRISED"],["ASLEEP", "matrix.Image.ASLEEP"],["ANGRY", "matrix.Image.ANGRY"],["CONFUSED", "matrix.Image.CONFUSED"],["NO", "matrix.Image.NO"],["YES", "matrix.Image.YES"],["LEFT_ARROW", "matrix.Image.LEFT_ARROW"],["RIGHT_ARROW", "matrix.Image.RIGHT_ARROW"],["DRESS", "matrix.Image.DRESS"],["TRANSFORMERS", "matrix.Image.TRANSFORMERS"],["SCISSORS", "matrix.Image.SCISSORS"],["EXIT", "matrix.Image.EXIT"],["TREE", "matrix.Image.TREE"],["PACMAN", "matrix.Image.PACMAN"],["TARGET", "matrix.Image.TARGET"],["TSHIRT", "matrix.Image.TSHIRT"],["ROLLERSKATE", "matrix.Image.ROLLERSKATE"],["DUCK", "matrix.Image.DUCK"],["HOUSE", "matrix.Image.HOUSE"],["TORTOISE", "matrix.Image.TORTOISE"],["BUTTERFLY", "matrix.Image.BUTTERFLY"],["STICKFIGURE", "matrix.Image.STICKFIGURE"],["GHOST", "matrix.Image.GHOST"],["PITCHFORK", "matrix.Image.PITCHFORK"],["MUSIC_QUAVERS", "matrix.Image.MUSIC_QUAVERS"],["MUSIC_QUAVER", "matrix.Image.MUSIC_QUAVER"],["MUSIC_CROTCHET", "matrix.Image.MUSIC_CROTCHET"],["COW", "matrix.Image.COW"],["RABBIT", "matrix.Image.RABBIT"],["SQUARE_SMALL", "matrix.Image.SQUARE_SMALL"],["SQUARE", "matrix.Image.SQUARE"],["DIAMOND_SMALL", "matrix.Image.DIAMOND_SMALL"],["DIAMOND", "matrix.Image.DIAMOND"],["CHESSBOARD", "matrix.Image.CHESSBOARD"],["TRIANGLE_LEFT", "matrix.Image.TRIANGLE_LEFT"],["TRIANGLE", "matrix.Image.TRIANGLE"],["SNAKE", "matrix.Image.SNAKE"],["UMBRELLA", "matrix.Image.UMBRELLA"],["SKULL", "matrix.Image.SKULL"],["GIRAFFE", "matrix.Image.GIRAFFE"],["SWORD", "matrix.Image.SWORD"]],
        imglist: [["ALL_CLOCKS", "matrix.Image.ALL_CLOCKS"], ["ALL_ARROWS", "matrix.Image.ALL_ARROWS"]],
        playlist: [["DADADADUM", "music.DADADADUM"], ["ENTERTAINER", "music.ENTERTAINER"], ["PRELUDE", "music.PRELUDE"], ["ODE", "music.ODE"], ["NYAN", "music.NYAN"], ["RINGTONE", "music.RINGTONE"], ["FUNK", "music.FUNK"], ["BLUES", "music.BLUES"], ["BIRTHDAY", "music.BIRTHDAY"], ["WEDDING", "music.WEDDING"], ["FUNERAL", "music.FUNERAL"], ["PUNCHLINE", "music.PUNCHLINE"], ["PYTHON", "music.PYTHON"], ["BADDY", "music.BADDY"], ["CHASE", "music.CHASE"], ["BA_DING", "music.BA_DING"], ["WAWAWAWAA", "music.WAWAWAWAA"], ["JUMP_UP", "music.JUMP_UP"], ["JUMP_DOWN", "music.JUMP_DOWN"], ["POWER_UP", "music.POWER_UP"], ["POWER_DOWN", "music.POWER_DOWN"]],
        tone_notes: [["NOTE_C3", "131"],["NOTE_D3", "147"],["NOTE_E3", "165"],["NOTE_F3", "175"],["NOTE_G3", "196"],["NOTE_A3", "220"],["NOTE_B3", "247"],
           ["NOTE_C4", "262"],["NOTE_D4", "294"],["NOTE_E4", "330"],["NOTE_F4", "349"],["NOTE_G4", "392"],["NOTE_A4", "440"],["NOTE_B4", "494"],
           ["NOTE_C5", "532"],["NOTE_D5", "587"],["NOTE_E5", "659"],["NOTE_F5", "698"],["NOTE_G5", "784"],["NOTE_A5", "880"],["NOTE_B5", "988"]],
        serial_pin: [["pin0", "0"], ["pin1", "1"], ["pin2", "2"], ["pin8", "8"], ["pin12", "12"], ["pin13", "13"], ["pin14", "14"], ["pin15", "15"], ["pin16", "16"]],
	radio_power: [['0', '0'], ['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'], ['6', '6'], ['7', '7']],
	radio_datarate:[["1Mbit", "RATE_1MBIT"], ["250Kbit", "RATE_250KBIT"], ["2Mbit", "RATE_2MBIT"]],
    one_more:[["ONE_SHOT", "ONE_SHOT"], ["PERIODIC", "PERIODIC"]],
    digital_dot:[["0", "0"], ["1", "1"], ["2", "2"]],
    }
};

profile["default"] = profile["esp32"];



