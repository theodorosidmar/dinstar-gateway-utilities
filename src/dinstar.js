const DinstarApi = require('dinstar-sms-api');
const Utils = require('./helpers/utils');

module.exports = (options) => {
  const { host, username, password, ports, message, phoneNumbers, interval } = options;

  if (!host || !username || !password) {
    throw Error('All authentication options need to be provided: HOST, USERNAME AND PASSWORD');
  }

  const dinstar = new DinstarApi(host, username, password);
};
