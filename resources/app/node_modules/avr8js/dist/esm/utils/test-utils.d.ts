import { CPU } from '../cpu/cpu';
export declare function asmProgram(source: string): {
    program: Uint16Array;
    lines: import("./assembler").LineTable[];
    instructionCount: number;
    labels: import("./assembler").LabelTable;
};
export declare class TestProgramRunner {
    private readonly cpu;
    private readonly onBreak;
    constructor(cpu: CPU, onBreak?: (cpu: CPU) => void);
    runInstructions(count: number): void;
    runUntil(predicate: (cpu: CPU) => boolean, maxIterations?: number): void;
    runToBreak(): void;
    runToAddress(byteAddr: number): void;
}
