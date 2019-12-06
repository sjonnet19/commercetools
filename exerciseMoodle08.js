const { createCustomerKeyVerfiedEmail } = require('./handson/customer.js');
const { random, personalFirstName, personalLastName, personalKey } = require('./handson/trainingHelpers.js');
const log = require('./logger.js').log;

// TODO 08.1: Create a second customer but with key and verified email
// TODO 08.2: Get both customers and see whether the email is verified

createCustomerKeyVerfiedEmail (
  `${personalKey}_2@example.com`, // email
  'Lowes1234!',                   // password
  personalFirstName,              // firstName
  personalLastName,               // lastName
  'US'                            // countryCode
).then(log)
  .catch(log);
