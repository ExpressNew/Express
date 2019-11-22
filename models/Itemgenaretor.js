var faker = require('faker')
const db =require("./item").itemsModel

for(var i= 0; i<1; i++){


var s = new db({
id: faker.random.number(70,200),
name: faker.random.first_name(),
price:""+ faker.random.number(300, 6000),
sizes: [faker.Lorem.words()],
colors:faker.Image.fashion(),
reviews: [faker.Lorem.sentence()],
imges:[faker.Image.abstractImage()],
mainComImg:faker.Image.fashion(),
mainComDis:faker.Lorem.sentence(),
mainComPri:faker.Lorem.sentence(),
mainComDisc:faker.Lorem.sentence(),
mainComRef:faker.Lorem.sentence()
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