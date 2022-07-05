import { CPU } from '../cpu/cpu';
import { u8 } from '../types';
export interface TWIEventHandler {
    start(repeated: boolean): void;
    stop(): void;
    connectToSlave(addr: u8, write: boolean): void;
    writeByte(value: u8): void;
    readByte(ack: boolean): void;
}
export interface TWIConfig {
    twiInterrupt: u8;
    TWBR: u8;
    TWCR: u8;
    TWSR: u8;
    TWDR: u8;
    TWAR: u8;
    TWAMR: u8;
}
export declare const twiConfig: TWIConfig;
export declare class NoopTWIEventHandler implements TWIEventHandler {
    protected twi: AVRTWI;
    constructor(twi: AVRTWI);
    start(): void;
    stop(): void;
    connectToSlave(): void;
    writeByte(): void;
    readByte(): void;
}
export declare class AVRTWI {
    private cpu;
    private config;
    private freqHz;
    eventHandler: TWIEventHandler;
    private busy;
    private TWI;
    constructor(cpu: CPU, config: TWIConfig, freqHz: number);
    get prescaler(): 1 | 4 | 16 | 64;
    get sclFrequency(): number;
    completeStart(): void;
    completeStop(): void;
    completeConnect(ack: boolean): void;
    completeWrite(ack: boolean): void;
    completeRead(value: u8): void;
    private get status();
    private updateStatus;
}
