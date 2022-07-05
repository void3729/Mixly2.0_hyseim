import { LitElement } from 'lit';
import { ElementPin } from '.';
export declare class BigSoundSensorElement extends LitElement {
    led1: boolean;
    led2: boolean;
    readonly pinInfo: ElementPin[];
    render(): import("lit-html").TemplateResult<1>;
}
