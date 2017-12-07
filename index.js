const commandLineArgs = require('command-line-args');

const optionsDefinitions = [
  { name: 'host', type: String },
  { name: 'username', type: String },
  { name: 'password', type: String },
  { name: 'ports', alias: 'p', type: String, multiple: true },
  { name: 'message', alias: 'm', type: String },
  { name: 'phoneNumbers', alias: 'n', type: String, multiple: true },
  { name: 'interval', alias: 'i', type: Number }
]

const options = commandLineArgs(optionsDefinitions, { partial: true });

if (
    !options.host || !options.username || !options.password ||
    !options.ports || !options.message || !options.phoneNumbers
  ) {
  throw Error(
    'All options must be provided: HOST, USERNAME, PASSWORD, ' +
    'PORTS, MESSAGE, PHONENUMBERS AND INTERVAL'
  );
}

require('./src/dinstar')(options);
