'use strict';
goog.provide('Blockly.Blocks.pins');
goog.require('Blockly.Blocks');
Blockly.Blocks.pins.HUE = 230;

Blockly.Blocks['pins_digital'] = {
   init: function() {
    this.setColour(Blockly.Blocks.pins.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.default.digital), 'PIN');
    this.setOutput(true);
  }
};

Blockly.Blocks['pins_digital_pin'] = {
   init: function() {
    this.setColour(Blockly.Blocks.pins.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.default.digital_pin), 'PIN');
    this.setOutput(true, Number);
  }
};

Blockly.Blocks['pins_input_pin'] = {
   init: function() {
    this.setColour(Blockly.Blocks.pins.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.default.input_pin), 'PIN');
    this.setOutput(true, Number);
  }
};

Blockly.Blocks['pins_output_pin'] = {
   init: function() {
    this.setColour(Blockly.Blocks.pins.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.default.output_pin), 'PIN');
    this.setOutput(true, Number);
  }
};

Blockly.Blocks['pwm_input'] = {
   init: function() {
    this.setColour(Blockly.Blocks.pins.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.default.pwm_input), 'PIN');
    this.setOutput(true);
  }
};

Blockly.Blocks['analog_input'] = {
   init: function() {
    this.setColour(Blockly.Blocks.pins.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.default.analog_input), 'PIN');
    this.setOutput(true);
  }
};

Blockly.Blocks['pwm_output'] = {
   init: function() {
    this.setColour(Blockly.Blocks.pins.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.default.pwm_output), 'PIN');
    this.setOutput(true);
  }
};

Blockly.Blocks['analog_output'] = {
   init: function() {
    this.setColour(Blockly.Blocks.pins.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.default.analog_output), 'PIN');
    this.setOutput(true);
  }
};

Blockly.Blocks['i2c_A_pin'] = {
   init: function() {
    this.setColour(Blockly.Blocks.pins.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.default.i2c_A_pin), 'PIN');
    this.setOutput(true, Number);
  }
};

Blockly.Blocks['i2c_B_pin'] = {
   init: function() {
    this.setColour(Blockly.Blocks.pins.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.default.i2c_B_pin), 'PIN');
    this.setOutput(true, Number);
  }
};


Blockly.Blocks['spi_A_pin'] = {
   init: function() {
    this.setColour(Blockly.Blocks.pins.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.default.spi_A_pin), 'PIN');
    this.setOutput(true, Number);
  }
};

Blockly.Blocks['spi_B_pin'] = {
   init: function() {
    this.setColour(Blockly.Blocks.pins.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.default.spi_B_pin), 'PIN');
    this.setOutput(true, Number);
  }
};

Blockly.Blocks['spi_C_pin'] = {
   init: function() {
    this.setColour(Blockly.Blocks.pins.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.default.spi_C_pin), 'PIN');
    this.setOutput(true, Number);
  }
};

Blockly.Blocks['spi_D_pin'] = {
   init: function() {
    this.setColour(Blockly.Blocks.pins.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.default.spi_D_pin), 'PIN');
    this.setOutput(true, Number);
  }
};

Blockly.Blocks['pins_analog'] = {
   init: function() {
    this.setColour(Blockly.Blocks.pins.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.default.analog), 'PIN');
    this.setOutput(true);
  }
};

Blockly.Blocks['pins_analog_pin'] = {
   init: function() {
    this.setColour(Blockly.Blocks.pins.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.default.analog_pin), 'PIN');
    this.setOutput(true, Number);
  }
};

Blockly.Blocks['pins_dac'] = {
   init: function() {
    this.setColour(Blockly.Blocks.pins.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.default.dac), 'PIN');
    this.setOutput(true);
  }
};

Blockly.Blocks['pins_dac_pin'] = {
   init: function() {
    this.setColour(Blockly.Blocks.pins.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.default.dac_pin), 'PIN');
    this.setOutput(true, Number);
  }
};

Blockly.Blocks['pins_button'] = {
   init: function() {
    this.setColour(Blockly.Blocks.pins.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.default.button), 'PIN');
    this.setOutput(true, Number);
  }
};

Blockly.Blocks['pins_pwm'] = {
   init: function() {
    this.setColour(Blockly.Blocks.pins.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.default.pwm), 'PIN');
    this.setOutput(true);
  }
};

Blockly.Blocks['pins_pwm_pin'] = {
   init: function() {
    this.setColour(Blockly.Blocks.pins.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.default.pwm_pin), 'PIN');
    this.setOutput(true, Number);
  }
};

Blockly.Blocks['pins_touch_pin'] = {
   init: function() {
    this.setColour(Blockly.Blocks.pins.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.default.touch_pin), 'PIN');
    this.setOutput(true, Number);
  }
};

Blockly.Blocks['pins_touch'] = {
   init: function() {
    this.setColour(Blockly.Blocks.pins.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.default.touch), 'PIN');
    this.setOutput(true);
  }
};

Blockly.Blocks['pins_serial'] = {
    init: function() {
        this.setColour(Blockly.Blocks.pins.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(profile.default.serial_pin), 'PIN');
        this.setOutput(true, Number);
    }
};

Blockly.Blocks['pins_builtinimg'] = {
    init: function() {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(profile.default.builtinimg), 'PIN');
        this.setOutput(true, "esp32_image");
    }
};

Blockly.Blocks['pins_imglist'] = {
    init: function() {
        this.setColour(Blockly.Blocks.pins.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(profile.default.imglist), 'PIN');
        this.setOutput(true);
    }
};

Blockly.Blocks['pins_playlist'] = {
    init: function() {
        this.setColour(Blockly.Blocks.pins.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(profile.default.playlist), 'PIN');
        this.setOutput(true);
    }
};

Blockly.Blocks['pins_exlcdh'] = {
    init: function() {
        this.setColour(Blockly.Blocks.pins.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(profile.default.exlcdh), 'PIN');
        this.setOutput(true, Number);
    }
};

Blockly.Blocks['pins_exlcdv'] = {
    init: function() {
        this.setColour(Blockly.Blocks.pins.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(profile.default.exlcdv), 'PIN');
        this.setOutput(true, Number);
    }
};

Blockly.Blocks['pins_axis'] = {
    init: function() {
        this.setColour(Blockly.Blocks.pins.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(profile.default.axis), 'PIN');
        this.setOutput(true, Number);
    }
};
Blockly.Blocks['pins_brightness'] = {
    init: function() {
        this.setColour(Blockly.Blocks.pins.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(profile.default.brightness), 'PIN');
        this.setOutput(true, Number);
    }
};

Blockly.Blocks['pins_tone_notes'] = {
    init: function() {
        this.setColour(Blockly.Blocks.pins.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(profile.default.tone_notes), 'PIN');
        this.setOutput(true, Number);
    }
};

Blockly.Blocks['pins_radio_power'] = {
    init: function() {
        this.setColour(Blockly.Blocks.pins.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(profile.default.radio_power), 'PIN');
        this.setOutput(true, Number);
    }
};

Blockly.Blocks['pins_radio_datarate'] = {
    init: function() {
        this.setColour(Blockly.Blocks.pins.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(profile.default.radio_datarate), 'PIN');
        this.setOutput(true, Number);
    }
};

Blockly.Blocks['pins_one_more'] = {
    init: function() {
        this.setColour(Blockly.Blocks.pins.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(profile.default.one_more), 'PIN');
        this.setOutput(true);
    }
};

Blockly.Blocks['pins_digital_dot'] = {
    init: function() {
        this.setColour(Blockly.Blocks.pins.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(profile.default.digital_dot), 'PIN');
        this.setOutput(true, Number);
    }
};