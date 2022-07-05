import { LitElement } from 'lit';
import { ElementPin } from './pin';
export declare class AnalogJoystickElement extends LitElement {
    xValue: number;
    yValue: number;
    pressed: boolean;
    knob: SVGCircleElement;
    readonly pinInfo: ElementPin[];
    static get styles(): import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    private keydown;
    private keyup;
    private mousedown;
    private mouseup;
    private press;
    private release;
    private valueChanged;
}
