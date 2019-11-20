var faker = require('faker')
const db =require("./item").itemsModel

for(var i= 0; i<2; i++){


var s = new db({
id: faker.random.number(70,200),
name: faker.definitions.first_name,
price:""+ faker.random.number(300, 6000),
sizes: faker.Lorem.words(),
colors:faker.Internet.color(),
reviews: [faker.Lorem.sentence()],
imges:[faker.Image.imageUrl()],
mainComImg:faker.Image.fashion(),
mainComDis:faker.Lorem.sentence()
})
s.save((error,data)=>{
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
})
console.log(s)
}

// console.log(obj)