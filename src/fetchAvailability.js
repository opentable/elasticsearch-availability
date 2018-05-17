const axios = require('axios');
const moment = require('moment');
const discovery = require('./discovery');

const sixtyDaysInMinutes = 60 * 24 * 60;
const dayInMinutes = 25 * 60;

module.exports = async function fetchAvailability(rids) {
  const url = `${discovery.find('availability-na')}/availability/v2/search`;
  const now = moment().subtract(1, 'days');

  // taking around 600ms
  return axios.post(url, {
    BackwardsMinutes: 0,
    ForwardMinutes: dayInMinutes,
    ForwardDays: 59,
    LocalExactTime: '00:00',
    LocalStartDate: moment().subtract(1, 'days').format('YYYY-MM-DD'),
    PartySize: 2,
    RequireTimes: true,
    RestaurantIds: rids
  })
  .then(response => {
    return response.data.Available;
  });
}
