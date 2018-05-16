const discovery = require('discovery');

module.exports = async function start() {
  return discovery.connect();
}
