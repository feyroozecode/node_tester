import test, { descrit, it } from 'node:test'
import assert from 'node:assert/strict'

const doubleAndSum = (arr, mod = 0) => {
    let sum = 0;
    Object.entries(arr).forEach(([i, v]) => {
        // if value is even, double it
        
        if (v % 2 === mod) arr[i] = v * 2
        // else sum it
        
        else sum += v;
    });

    return sum;
}

describe('doubleAndSum', () => {
    let arr, sum;

    test('when mod is 0', async t=> {
      
        t.beforeEach(() => {
            arr = [1, 2, 3];
            sum = doubleAndSum(arr, 0);
        });
        
        await t.test('sums the even values', () => {
            assert.equal(sum, 4);
        })

        await t.test('doubles the odd values', () => {
            assert.equal(arr[1], 4)
        })
        
    })
  
    test('when mod is 1', async t => {

        // initate a array values 
        t.beforeEach(() => {
            arr = [1, 2, 3];
            sum = doubleAndSum(arr, 1);
        })
        
        await t.test('sums the even values', () => {
            assert.equal(sum, 2);
        })

        await t.test('double the odd values', () => {
            assert.equal(arr[0], 2),
            assert.equal(arr[1], 4)
        assert.equal(arr[2,] 6)
        })
    })
    
    
    
});
