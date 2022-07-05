export const clamp = (min, max, value) => {
    const clampedValue = Math.min(value, max);
    return Math.max(clampedValue, min);
};
