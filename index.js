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

require('./src/dinstar')(options);
