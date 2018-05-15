const test = require('ava');
const moment = require('moment');
const parseAvailabilityByteString = require('../src/parseAvailabilityByteString');

const sampleByteString = '\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x80\x80\x80\x80\x80\x80\x00\x00\x00\x00\x80\x80\x80\x80\x80\x80\x80\x80\x80\x80\x80\x80\x80\x00\x00';

test('can parse availability status from byte string', t => {
  const dateTime = moment('2018-06-01', 'YYYY-MM-DD');
  const parsed = parseAvailabilityByteString(dateTime, sampleByteString);
  t.is(parsed.isAvailable, true, 'slot has availability');
});
