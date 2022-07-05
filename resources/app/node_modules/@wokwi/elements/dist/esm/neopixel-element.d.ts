import { LitElement } from 'lit';
import { ElementPin } from './pin';
export declare class NeoPixelElement extends LitElement {
    r: number;
    g: number;
    b: number;
    readonly pinInfo: ElementPin[];
    render(): import("lit-html").TemplateResult<1>;
}
