import test, { describe, it} from 'node:test'
import assert from 'node:assert/strict'

const ExpectedVal = 13;

test('Test 01', () => {
    assert.strictEqual(13, ExpectedVal);
});
