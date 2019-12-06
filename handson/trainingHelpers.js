// helper values that we only need in trainings because multiple persons
// are trying to create the exact identical data

// Random String to create unique keys and skus that do not collide with others in the training
module.exports.random = Math.random().toString(36).substring(5);

// TODO 4.0: define your personal name and "id" for key fields by exporting the following commented values
// This is to not collide with the identical data others want to create in the training

const firstName = 'Peter'
const lastName = 'Miller'
module.exports.personalFirstName = firstName
module.exports.personalLastName = lastName
module.exports.personalName = `${firstName} ${lastName}`
module.exports.personalKey = `${firstName} ${lastName}`.replace(/[^0-9a-z_-]/gi, '').toLowerCase()

// TODO 7.2: fill this with the ID you got in exercise 7 when creating your customer
module.exports.customerId = '639c0924-dcf3-42f7-beea-1e63043e03fa' 
