import { LitElement } from 'lit';
export declare class IRRemoteElement extends LitElement {
    static get styles(): import("lit").CSSResult;
    eventHandler(target: SVGElement, buttonId: string, type: 'up' | 'down'): void;
    buttonEvent(event: Event, type: 'up' | 'down'): null | undefined;
    keyboardEvent(event: KeyboardEvent, type: 'up' | 'down'): void;
    render(): import("lit-html").TemplateResult<1>;
}
