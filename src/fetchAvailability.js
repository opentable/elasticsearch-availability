const axios = require('axios');
const discovery = require('./discovery');

module.exports = async function fetchAvailability(rids) {
  const url = `${discovery.find('availability-na')}/availability/v2/search`;
  return axios.post(url, {});
}
