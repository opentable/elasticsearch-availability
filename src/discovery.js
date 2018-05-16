const Discovery = require('ot-discovery');

module.exports = new Discovery(
  'discovery-prod-sc.otenv.com',
  [
    'discovery-prod-sc.otenv.com',
    'discovery-prod-uswest2.otenv.com'
  ],
  'prod-sc',
  'elasticsearch-availability'
);
