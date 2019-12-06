const crypto = require('crypto');
const { createRequestBuilder } = require('@commercetools/api-request-builder');
const { getClient, projectKey } = require('./client.js');

const getCustomerById = (id) => {
  return getClient().execute({
    uri: `/${projectKey}/customers/${id}`,               
    method: 'GET'                        
  })
}

const getCustomerByKey = (key) => {
  return getClient().execute({
    uri: `/${projectKey}/customers/key=${key}`,               
    method: 'GET'                        
  })
}

const getCustomerByKeyWITHOUTBUILDER = (key) => {
  return getClient().execute({
    uri: `/${projectKey}/customers/key=${key}`,               
    method: 'GET'                        
  })
}
 
const createCustomerKeyVerfiedEmail = (email, password, firstName, lastName, country) => {
  return getClient().execute({
    uri: `/${projectKey}/customers`,               
    method: 'POST',
    body: {
      email,
      password,
      firstName,
      lastName,
      addresses: [{country}],
      isEmailVerified: true,
      key: crypto.randomBytes(16).toString("hex") 
    }
  })
}

const createCustomer = (email, password, firstName, lastName, country) => {
  return getClient().execute({
    uri: `/${projectKey}/customers`,               
    method: 'POST',
    body: {
	  email,
	  password,
	  firstName,
	  lastName,
	  addresses: [{country}]
	}
  })
}



module.exports.createCustomer = createCustomer;
module.exports.createCustomerKeyVerfiedEmail = createCustomerKeyVerfiedEmail;
module.exports.getCustomerByKey = getCustomerByKey;
module.exports.getCustomerById = getCustomerById;
module.exports.getCustomerByKeyWITHOUTBUILDER = getCustomerByKeyWITHOUTBUILDER;