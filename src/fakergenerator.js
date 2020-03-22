const faker = require('faker');
const fs = require('fs');

function generateuser(){
    let users = [];
    for(let i = 1 ; i<= 100 ; i++){
       const firsname =  faker.name.firstName();
       const lastname  =  faker.name.lastName();
       const email     = faker.internet.email();
       const phone     = faker.phone.phoneNumber();
       
       users.push({
           id:i,
           firsname:firsname,
           lastname:lastname,
           email:email,
           phone:phone
       })
    }
     const result = {data:users}
     fs.writeFileSync('data.json', JSON.stringify(result));
}

generateuser();



