const { getCustomerById } = require('./handson/customer.js');
const { getCustomerByKey } = require('./handson/customer.js');
const log = require('./logger.js').log;

// Get both customers

getCustomerById("639c0924-dcf3-42f7-beea-1e63043e03fa")
    .then(log)
    .catch(log);
getCustomerByKey("e09894fda1766a26769ff4bcb25a997b")
     .then(log)
    .catch(log);