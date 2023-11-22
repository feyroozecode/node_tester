import test, { describe, it} from 'node:test'
import assert from 'node:assert/strict'

const ExpectedVal = 13;

test('Test 01',  async t => {
    let age;

    t.beforeEach(() => {
        age = 1;
    })

    t.afterEach(() => {
        age = 0;
    });

    await t.test('Test 02', () => { 
        assert.str
    })

});
