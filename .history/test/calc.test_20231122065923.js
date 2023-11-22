import test, { descrit, it } from 'node:test'
import assert from 'node:assert/strict'

const doubleAndSum = (arr, mod = 0) => {
    let sum = 0;
    Object.entries(arr).forEach(([i, v]) => {
        if (v % 2 === mod) arr[i] = v * 2
        else sum += v;
    });

    return sum;
}

describe('doubleAndSum', () => {
    let arr, su
});
