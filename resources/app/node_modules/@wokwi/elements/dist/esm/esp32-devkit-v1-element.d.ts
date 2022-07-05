import { LitElement } from 'lit';
import { ElementPin } from '.';
export declare class ESP32DevkitV1Element extends LitElement {
    led1: boolean;
    ledPower: boolean;
    readonly pinInfo: ElementPin[];
    render(): import("lit-html").TemplateResult<1>;
}
