const test = require('ava');
const parseAvailabilityByteString = require('../src/parseAvailabilityByteString');

const sampleByteString = '\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\b\x88\x88\x88\x88\x88\x88\x88\x88\x88\x88\x88\x88\x88\x88\x88';

test('can parse availability status from byte string', t => {
  const parsed = parseAvailabilityByteString(sampleByteString);
  const sixThirtySlot = 74;

  t.is(parsed[sixThirtySlot].isAvailable, true, 'slot has availability at 6:30');
});
