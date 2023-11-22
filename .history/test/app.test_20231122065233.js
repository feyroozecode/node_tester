import test, { describe, it} from 'node:test'
import assert from 'node:assert/strict'

test('Test 01',  async t => {
    let age;

    t.beforeEach(() => {
        age = 1;
    })

    t.afterEach(() => {
        age = 0;
    });

    await t.test('Test 02', () => { 
        assert.strictEqual(age, 1);
    })

});
