/**
 * AVR8 Watchdog Timer
 * Part of AVR8js
 * Reference: http://ww1.microchip.com/downloads/en/DeviceDoc/ATmega48A-PA-88A-PA-168A-PA-328-P-DS-DS40002061A.pdf
 *
 * Copyright (C) 2021 Uri Shaked
 */
import { AVRClock } from '..';
import { CPU } from '../cpu/cpu';
import { u8 } from '../types';
export interface WatchdogConfig {
    watchdogInterrupt: u8;
    MCUSR: u8;
    WDTCSR: u8;
}
export declare const watchdogConfig: WatchdogConfig;
export declare class AVRWatchdog {
    private cpu;
    private config;
    private clock;
    readonly clockFrequency = 128000;
    /**
     * Used to keep track on the last write to WDCE. Once written, the WDE/WDP* bits can be changed.
     */
    private changeEnabledCycles;
    private watchdogTimeout;
    private enabledValue;
    private scheduled;
    private Watchdog;
    constructor(cpu: CPU, config: WatchdogConfig, clock: AVRClock);
    resetWatchdog(): void;
    checkWatchdog: () => void;
    get enabled(): boolean;
    /**
     * The base clock frequency is 128KHz. Thus, a prescaler of 2048 gives 16ms timeout.
     */
    get prescaler(): number;
}
