/**
 * AVR8 Clock
 * Part of AVR8js
 * Reference: http://ww1.microchip.com/downloads/en/DeviceDoc/ATmega48A-PA-88A-PA-168A-PA-328-P-DS-DS40002061A.pdf
 *
 * Copyright (C) 2020, Uri Shaked
 */
import { CPU } from '../cpu/cpu';
import { u32, u8 } from '../types';
export interface AVRClockConfig {
    CLKPR: u8;
}
export declare const clockConfig: AVRClockConfig;
export declare class AVRClock {
    private cpu;
    private baseFreqHz;
    private config;
    private clockEnabledCycles;
    private prescalerValue;
    cyclesDelta: number;
    constructor(cpu: CPU, baseFreqHz: u32, config?: AVRClockConfig);
    get frequency(): number;
    get prescaler(): number;
    get timeNanos(): number;
    get timeMicros(): number;
    get timeMillis(): number;
}
