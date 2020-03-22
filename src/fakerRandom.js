const faker = require('faker');


const id = faker.random.uuid();
const number= faker.random.number();
const image = faker.random.image();
const word = faker.random.words(10);


console.log({number})
console.log({id})
console.log({image})
console.log({word})
