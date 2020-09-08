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
    const duration = getPrice('uk', 4, 'text');
    expect(duration).toBe(50);
});

it('price should be correct 2', () => {
    const duration = getPrice('eng', 3613, 'text');
    expect(duration).toBe(433.5);
});

it('price should be correct 3', () => {
    const duration = getPrice('', 0, 'text');
    expect(duration).toBe(0);
});

it('price should be correct 4', () => {
    const duration = getPrice('eng', 906, 'pdf');
    expect(duration).toBe(130.4);
});
