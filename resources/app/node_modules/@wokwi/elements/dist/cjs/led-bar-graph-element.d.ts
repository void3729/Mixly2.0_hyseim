import { LitElement } from 'lit';
import { ElementPin } from './pin';
export declare class LedBarGraphElement extends LitElement {
    /** The color of a lit segment. Either HTML color or the special values GYR / BCYR */
    color: string;
    /** The color of an unlit segment */
    offColor: string;
    readonly pinInfo: ElementPin[];
    /**
     * The values for the individual segments: 1 for a lit segment, and 0 for
     * an unlit segment.
     */
    values: number[];
    render(): import("lit-html").TemplateResult<1>;
}
