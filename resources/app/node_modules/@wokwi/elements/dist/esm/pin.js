/** Helper function for creating PinSignalInfo objects */
export const analog = (channel) => ({ type: 'analog', channel });
export const i2c = (signal, bus = 0) => ({
    type: 'i2c',
    signal,
    bus,
});
export const spi = (signal, bus = 0) => ({
    type: 'spi',
    signal,
    bus,
});
export const usart = (signal, bus = 0) => ({
    type: 'usart',
    signal,
    bus,
});
export const GND = () => ({ type: 'power', signal: 'GND' });
export const VCC = (voltage) => ({ type: 'power', signal: 'VCC', voltage });
