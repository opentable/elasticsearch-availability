const Elasticsearch = require('elasticsearch');

module.exports = new Elasticsearch.Client({
  // FIXME env settings, multiple hosts
  host: 'pp-sf-freetext-es-master-01.qasql.opentable.com:9200'
});
