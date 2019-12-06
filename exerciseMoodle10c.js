const { createProduct, getProductTypeByKey } = require('./handson/product.js');
const { personalName, personalKey } = require('./handson/trainingHelpers.js');
const log = require('./logger.js').log;

getProductTypeByKey('drinks').then(res => {

  createProduct( {
    name: { en: `Coke` },
    description: { en: 'Coke nice!' },
    slug: { en: 'coke' },
    key: `b454a7719f3f1153a09cbcb280a43d2b`,
    productType: { id: res.id },
    sku: `4545df0fdc36e1abf5906bf94ede87f9`,
    taxCategoryKey: 'vat'
  })
    .then(log)
    .catch(log);

});
