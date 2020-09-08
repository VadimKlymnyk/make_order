import React from 'react';
import { getDuration, getPrice } from '../utils.js';


it('duration should be correct 1', () => {
    const duration = getDuration('uk', 4, 'text');
    expect(duration).toBe(60);
});

it('duration should be correct 2', () => {
    const duration = getDuration('eng', 1764, 'text');
    expect(duration).toBe(347);
});

it('duration should be correct 3', () => {
    const duration = getDuration('', 0, 'text');
    expect(duration).toBe(0);
});

it('duration should be correct 4', () => {
    const duration = getDuration('eng', 400, 'pdf');
    expect(duration).toBe(116);
});

it('price should be correct 1', () => {
    const price = getPrice('uk', 4, 'text');
    expect(price).toBe(50);
});

it('price should be correct 2', () => {
    const price = getPrice('eng', 3613, 'text');
    expect(price).toBe(433.5);
});

it('price should be correct 3', () => {
    const price = getPrice('', 0, 'text');
    expect(price).toBe(0);
});

it('price should be correct 4', () => {
    const price = getPrice('eng', 906, 'pdf');
    expect(price).toBe(130.4);
});
