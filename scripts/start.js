const start = require('../src/start');

start()
  .then(() => console.log('Started app.'))
  .catch(e => {
    console.error('Failed to start app: ' + e);
    process.exit(1);
  });
