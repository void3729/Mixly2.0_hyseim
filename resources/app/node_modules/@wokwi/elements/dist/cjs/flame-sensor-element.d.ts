import { LitElement } from 'lit';
import { ElementPin } from '.';
export declare class FlameSensorElement extends LitElement {
    ledPower: boolean;
    ledSignal: boolean;
    readonly pinInfo: ElementPin[];
    render(): import("lit-html").TemplateResult<1>;
}
