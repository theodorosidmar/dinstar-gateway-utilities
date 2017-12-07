const DinstarApi = require('dinstar-sms-api');
const sleep = require('sleep');
const Utils = require('./helpers/utils');
const { log } = require('./helpers/logger');

module.exports = (options) => {
  const { host, username, password, ports, message, phoneNumbers, interval } = options;

  const dinstar = new DinstarApi(host, username, password);

  for (let i = 0; i < phoneNumbers.length; i += 1) {
    if (Utils.isPhoneNumverValid(phoneNumbers[i])) {
      for (let j = 0; j < ports.length; j += 1) {
        log(`Sending ${message} to number ${phoneNumbers[i]} on port ${ports[j]}`);
        dinstar.sendSms(phoneNumbers[i], message, null, ports[j]);
        log(`Successfully sent and now awaiting for ${interval} seconds`);
        if (interval) sleep.sleep(interval);
      }
    } else {
      log(`${phoneNumbers[i]} is a invalid number`);
    }
  }
};
