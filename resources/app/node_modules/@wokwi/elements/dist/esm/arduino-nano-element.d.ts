import { LitElement } from 'lit';
import { ElementPin } from './pin';
export declare class ArduinoNanoElement extends LitElement {
    led13: boolean;
    ledRX: boolean;
    ledTX: boolean;
    ledPower: boolean;
    resetPressed: boolean;
    resetButton: SVGCircleElement;
    readonly pinInfo: ElementPin[];
    static get styles(): import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    private down;
    private up;
    private leave;
}
