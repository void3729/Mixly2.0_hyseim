var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement } from 'lit/decorators.js';
import { LCD1602Element } from './lcd1602-element';
let LCD2004Element = class LCD2004Element extends LCD1602Element {
    constructor() {
        super(...arguments);
        this.numCols = 20;
        this.numRows = 4;
    }
};
LCD2004Element = __decorate([
    customElement('wokwi-lcd2004')
], LCD2004Element);
export { LCD2004Element };
