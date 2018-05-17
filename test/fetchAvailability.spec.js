const test = require('ava');
const discovery = require('../src/discovery');
const fetchAvailability = require('../src/fetchAvailability');

test('can fetch availability', async t => {
  await discovery.connect();
  const availability = await fetchAvailability([51049, 186931]);
  t.truthy(availability.length > 0, 'has availability');
});
