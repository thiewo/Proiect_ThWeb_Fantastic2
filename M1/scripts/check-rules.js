import assert from 'node:assert/strict';
import { poateConfirma } from '../server/rules.js';


assert.equal(poateConfirma('HELD', 1000, 999), true);
assert.equal(poateConfirma('HELD', 1000, 1000), false);
assert.equal(poateConfirma('CANCELLED', 1000, 999), false);
console.log('3 exemple de reguli verificate'); 