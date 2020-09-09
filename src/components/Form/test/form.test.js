import React from 'react';
import moment from 'moment';
import { getDuration, getPrice, calculation } from '../utils.js';

//-------------------deadline------------------------

it('deadline not should be on Saturday 1', () => {
    const start = moment('2020-09-11 20:00:00')
    const deadline = calculation(start, 222);
    expect(deadline.days()).not.toBe(6);
});

it('deadline not should be on Saturday 2', () => {
    const start = moment('2020-09-11 20:00:00')
    const deadline = calculation(start, 222);
    expect(deadline.days()).not.toBe(6);
});

it('deadline not should be on Sunday 1', () => {
    const start = moment('2020-09-13 10:00:00')
    const deadline = calculation(start, 222);
    expect(deadline.days()).not.toBe(0);
});

it('deadline not should be on Sunday 2', () => {
    const start = moment('2020-09-13 11:00:00')
    const deadline = calculation(start, 81000);
    expect(deadline.days()).not.toBe(0);
});

it('deadline 30 weeks should be correct', () => {
    const start = moment('2020-09-09 11:00:00')
    const deadline = calculation(start, 81000);
    expect(deadline.format()).toBe(start.clone().add(30, 'weeks').format());
});

it('deadline 100 weeks should be correct', () => {
    const start = moment('2020-09-09 11:00:00')
    const deadline = calculation(start, 270000);
    expect(deadline.format()).toBe(start.clone().add(100, 'weeks').format());
});

it('deadline should be correct 1', () => {
    const start = moment('2020-09-09 10:00:00')
    const expected = moment('2020-09-09 11:00:00')
    const deadline = calculation(start, 60);
    expect(deadline.format()).toBe(expected.format());
});

it('deadline should be correct 2', () => {
    const start = moment('2020-09-11 20:00:00')
    const expected = moment('2020-09-14 13:42:00')
    const deadline = calculation(start, 222);
    expect(deadline.format()).toBe(expected.format());
});

it('deadline should be correct 3', () => {
    const start = moment('2020-09-09 12:00:00')
    const expected = moment('2022-08-10 13:40:00')
    const deadline = calculation(start, 270100);
    expect(deadline.format()).toBe(expected.format());
});

it('deadline should not be 2020 year', () => {
    const start = moment('2020-09-11 20:00:00')
    const deadline = calculation(start, 324100);
    expect(deadline.year()).not.toBe('2020');
});


//-------------------duration------------------------

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

it('text length 10 000 000 duration should be correct ', () => {
    const duration = getDuration('eng', 10000000, 'pdf');
    expect(duration).toBe(2162192);
});

it('text length 100 000 000 duration should be correct ', () => {
    const duration = getDuration('eng', 100000000, 'pdf');
    expect(duration).toBe(21621651);
});

it('text length 1 000 000 000 duration should be defined', () => {
    const duration = getDuration('ru', 1000000000, 'pdf');
    expect(duration).toBeDefined();
});

it('text length 10 000 000 000 duration not should be 0', () => {
    const duration = getDuration('eng', 10000000000, 'text');
    expect(duration).not.toEqual(0);
});


//-------------------price-----------------------

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

it('text length 100 000 price should be correct', () => {
    const price = getPrice('eng', 100000, 'text');
    expect(price).toBe(12000);
});

it('text length 1 000 000 price should be correct', () => {
    const price = getPrice('eng', 1000000, 'else');
    expect(price).toBe(144000);
});

it('text length 10 000 000 price should be correct', () => {
    const price = getPrice('ru', 10000000, 'text');
    expect(price).toBe(500000);
});

it('text length 100 000 000 price should be correct', () => {
    const price = getPrice('ru', 100000000, 'text');
    expect(price).toBe(5000000);
});

it('text length 1 000 000 000 price should be defined', () => {
    const price = getPrice('ru', 1000000000, 'pdf');
    expect(price).toBeDefined();
});

it('text length 10 000 000 000 price not should be 0', () => {
    const price = getPrice('eng', 10000000000, 'text');
    expect(price).not.toEqual(0);
});

