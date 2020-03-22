const faker = require('faker/locale/es');//definir en español los datos falsos

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();

console.log(firstName);
console.log(lastName);