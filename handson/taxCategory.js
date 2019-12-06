const { createRequestBuilder } = require('@commercetools/api-request-builder');
const { getClient, projectKey } = require('./client.js');

const getTaxCategoryByKey = (key) => {
  return getClient().execute({
    uri: `/${projectKey}/tax-categories/key=${key}`,               
    method: 'GET'                        
  })
}


module.exports.getTaxCategoryByKey = getTaxCategoryByKey;
