const { createCustomer } = require('./handson/customer.js');
const { random, personalFirstName, personalLastName, personalKey } = require('./handson/trainingHelpers.js');
const log = require('./logger.js').log;

createCustomer(
  `${personalKey}@example.com`, // email
  'Lowes1234!',                 // password
  personalFirstName,            // firstName
  personalLastName,             // lastName
  'US'                          // countryCode
).then(log)
  .catch(log);
