import { LitElement } from 'lit';
import { ElementPin } from '.';
export declare class RGBLedElement extends LitElement {
    ledRed: number;
    ledGreen: number;
    ledBlue: number;
    readonly pinInfo: ElementPin[];
    render(): import("lit-html").TemplateResult<1>;
}
