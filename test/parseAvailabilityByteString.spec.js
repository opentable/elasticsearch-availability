const test = require('ava');
const parseAvailabilityByteString = require('../src/parseAvailabilityByteString');

const sampleByteString = "\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x80\x80\x80\x80\x80\x80\x00\x00\x00\x00\x80\x80\x80\x80\x80\x80\x80\x80\x80\x80\x80\x80\x80\x00\x00";

test('can parse availability status from byte string', t => {
  const parsed = parseAvailabilityByteString(sampleByteString);
  t.is(parsed.isAvailable, true, 'slot has availability');
});
