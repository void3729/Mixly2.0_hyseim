"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clamp = void 0;
const clamp = (min, max, value) => {
    const clampedValue = Math.min(value, max);
    return Math.max(clampedValue, min);
};
exports.clamp = clamp;
