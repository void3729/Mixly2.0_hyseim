import { LitElement } from 'lit';
import { ElementPin } from '.';
export declare class PhotoresistorSensorElement extends LitElement {
    ledDO: boolean;
    ledPower: boolean;
    readonly pinInfo: ElementPin[];
    render(): import("lit-html").TemplateResult<1>;
}
