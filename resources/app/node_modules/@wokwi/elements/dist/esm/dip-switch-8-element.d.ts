import { LitElement } from 'lit';
import { ElementPin } from '.';
export declare class DipSwitch8Element extends LitElement {
    values: number[];
    readonly pinInfo: ElementPin[];
    /**
     * Change switch state
     * @param index Which switch to change
     */
    private toggleSwitch;
    /** Change switch state by keyboard 1-8 press */
    private onKeyDown;
    private drawSwitch;
    private preventTextSelection;
    render(): import("lit-html").TemplateResult<1>;
}
