import { LitElement } from 'lit';
import { ElementPin } from '.';
export declare class KY040Element extends LitElement {
    angle: number;
    stepSize: number;
    private pressed;
    private arrowTimer;
    static get styles(): import("lit").CSSResult;
    readonly pinInfo: ElementPin[];
    render(): import("lit-html").TemplateResult<1>;
    private clockwiseStep;
    private counterClockwiseStep;
    private press;
    private release;
    private counterclockwiseArrowPress;
    private clockwiseArrowPress;
    private arrowRelease;
    private keydown;
    private keyup;
}
