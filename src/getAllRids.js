const elasticsearch = require('./elasticsearch');
const scrollInterval = '1m';

module.exports = async function getAllRids() {
  let ids = [];

  let scroll = await elasticsearch.search({
    scroll: scrollInterval,
    index: 'restaurant-suggester.14.pp-sf',
    body: {
      query: {
        bool: {
          must_not: [
            {
              exists: {
                field: 'flags'
              }
            },
            {
              term: {
                metroId: 1
              }
            }
          ]
        }
      },
      size: 100
    }
  });

  let scrollId = scroll._scroll_id;
  let finished = false;
  ids = ids.concat(scroll.hits.hits.map(h => h._id));

  while (!finished) {
    let scroll = await elasticsearch.scroll({
      scroll: scrollInterval,
      scrollId
    });

    if (scroll.hits.hits.length == 0) {
      finished = true;
    } else {
      scrollId = scroll._scroll_id;
      ids = ids.concat(scroll.hits.hits.map(h => h._id));
    }
  }

  return ids;
}
