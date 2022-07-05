"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VCC = exports.GND = exports.usart = exports.spi = exports.i2c = exports.analog = void 0;
/** Helper function for creating PinSignalInfo objects */
const analog = (channel) => ({ type: 'analog', channel });
exports.analog = analog;
const i2c = (signal, bus = 0) => ({
    type: 'i2c',
    signal,
    bus,
});
exports.i2c = i2c;
const spi = (signal, bus = 0) => ({
    type: 'spi',
    signal,
    bus,
});
exports.spi = spi;
const usart = (signal, bus = 0) => ({
    type: 'usart',
    signal,
    bus,
});
exports.usart = usart;
const GND = () => ({ type: 'power', signal: 'GND' });
exports.GND = GND;
const VCC = (voltage) => ({ type: 'power', signal: 'VCC', voltage });
exports.VCC = VCC;
