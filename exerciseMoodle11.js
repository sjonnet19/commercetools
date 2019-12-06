const { getClient, projectKey } = require('./handson/client.js');
const log = require('./logger.js').log;
const { createRequestBuilder } = require('@commercetools/api-request-builder');

// TODO Get product
// TODO Get category
// TODO TOMORROW Assign product to category

const getProduct = (key) => { 
  return getClient().execute({
    uri: `/${projectKey}/products/key=${key}`,               
    method: 'GET'               
  })
}


// Get the category
const getCategory = (key) => {
  return getClient().execute({
    uri: `/${projectKey}/categories/key=${key}`,               
    method: 'GET'                   
  })
}



// Day 2 VERSION 1: Using Promise
const assignProductToCategory = (productKey, categoryKey) => { 
  return getProduct(productKey).then(product => {
    return getCategory(categoryKey).then(category => {
      return getClient().execute({
        uri: `/${projectKey}/products/${product.body.id}`,               
        method: 'POST',
        body: {
          version: product.body.version,
          actions: [{
            action: 'addToCategory',
            category: { id: category.body.id }
          }]
        }    
      })
    })
  })
}

assignProductToCategory('b454a7719f3f1153a09cbcb280a43d2b', 'drinks').then(log).catch(log);


// Day 2 VERSION 2: Using Await
// const assignProductToCategoryAwait = async (productKey, categoryKey) => { }
 
// assignProductToCategoryAwait('b454a7719f3f1153a09cbcb280a43d2b', 'drinks').then(log).catch(log);
