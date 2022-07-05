import { LitElement } from 'lit';
import { ElementPin } from '.';
export declare class NanoRP2040ConnectElement extends LitElement {
    ledRed: number;
    ledGreen: number;
    ledBlue: number;
    ledBuiltIn: boolean;
    ledPower: boolean;
    readonly pinInfo: ElementPin[];
    render(): import("lit-html").TemplateResult<1>;
}
