const { getClient, projectKey } = require('./client.js');
const log = require('../logger.js').log;
const { createRequestBuilder } = require('@commercetools/api-request-builder');

const getProductTypes = () => {
  return getClient().execute({
    uri: `/${projectKey}/product-types`,               
    method: 'GET'                        
  })
}


const getProductTypeByKey = (key) => {
  return getClient().execute({
    uri: `/${projectKey}/product-types/key=${key}`,               
    method: 'GET'                        
  })
}
 

const createProductDraft = (productData) => {

}


const createProduct = (productData) => { 
  return getClient().execute({
    uri: `/${projectKey}/products`,               
    method: 'POST',
    body: productData                   
  })
}

// Prepare query string in api playground
//

const queryProducts = (attributeName, attributeValue) => { 
  const predicate = `?masterData(current(${attributeName}(en=${attributeValue})))`
  return getClient().execute({
    uri: `/${projectKey}/products?${encodeURIComponent(predicate)}`,               
    method: 'GET'                        
  })
}


const searchProducts = (attributeName, attributeValue, locale, userInput) => { }

  


module.exports.getProductTypes = getProductTypes;
module.exports.getProductTypeByKey = getProductTypeByKey;
module.exports.createProduct = createProduct;
module.exports.queryProducts = queryProducts;
module.exports.searchProducts = searchProducts;
