import { CPU } from '../cpu/cpu';
import { u16, u32, u8 } from '../types';
export interface EEPROMBackend {
    readMemory(addr: u16): u8;
    writeMemory(addr: u16, value: u8): void;
    eraseMemory(addr: u16): void;
}
export declare class EEPROMMemoryBackend implements EEPROMBackend {
    readonly memory: Uint8Array;
    constructor(size: u16);
    readMemory(addr: u16): number;
    writeMemory(addr: u16, value: u8): void;
    eraseMemory(addr: u16): void;
}
export interface AVREEPROMConfig {
    eepromReadyInterrupt: u8;
    EECR: u8;
    EEDR: u8;
    EEARL: u8;
    EEARH: u8;
    /** The amount of clock cycles erase takes */
    eraseCycles: u32;
    /** The amount of clock cycles a write takes */
    writeCycles: u32;
}
export declare const eepromConfig: AVREEPROMConfig;
export declare class AVREEPROM {
    private cpu;
    private backend;
    private config;
    /**
     * Used to keep track on the last write to EEMPE. From the datasheet:
     * The EEMPE bit determines whether setting EEPE to one causes the EEPROM to be written.
     * When EEMPE is set, setting EEPE within four clock cycles will write data to the EEPROM
     * at the selected address If EEMPE is zero, setting EEPE will have no effect.
     */
    private writeEnabledCycles;
    private writeCompleteCycles;
    private EER;
    constructor(cpu: CPU, backend: EEPROMBackend, config?: AVREEPROMConfig);
}
