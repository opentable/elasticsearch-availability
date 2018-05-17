const getAllRids = require('../src/getAllRids');
const fetchAvailability = require('../src/fetchAvailability');
const discovery = require('../src/discovery');

async function run() {
  await discovery.connect();

  const allRids = await getAllRids();

  const time1 = new Date().getTime();

  await fetchAvailability(allRids);

  const time2 = new Date().getTime() - time1;

  console.log(`Took ${time2} ms to complete total availability fetch.`);
}

run().catch(e => {
  console.error('failed to execute benchmark: ', e);
  process.exit(1);
});
