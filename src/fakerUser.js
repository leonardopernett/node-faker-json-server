const faker = require('faker');

const firstname = faker.name.firstName();
const lastname  = faker.name.lastName();
const prefix    = faker.name.prefix();
const jobTitle = faker.name.jobTitle();
const address = faker.address.streetAddress();
const phone = faker.phone.phoneNumber();

console.log('Employee: ' +firstname + " " + lastname);
console.log("prefix: " + prefix);
console.log('jobTittl: ' + jobTitle);
console.log('address: ' + address);
console.log('phone: ' +phone);

