const test = require('ava');
const moment = require('moment');
const parseAvailabilityByteString = require('../src/parseAvailabilityByteString');

const sampleByteString = '\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\b\x88\x88\x88\x88\x88\x88\x88\x88\x88\x88\x88\x88\x88\x88\x88';

test('can parse availability status from byte string', t => {
  const dateTime = moment('2018-06-01', 'YYYY-MM-DD');
  dateTime.add(18, 'hours');
  dateTime.add(30, 'minutes');

  const parsed = parseAvailabilityByteString(dateTime, sampleByteString);

  t.is(parsed[0].isAvailable, true, 'slot has availability');
});
