const {MongoClient} = require('mongodb');

describe('insert', () => {
  let connection;
  let db;
  let MONGO_URI="mongodb+srv://yara:yara@cluster0-jfp7h.mongodb.net/EXPRESS?retryWrites=true&w=majority"
let dbName="second-project"
  beforeAll(async () => {
   // connection = await MongoClient.connect(global.__MONGO_URI__, {
    connection = await MongoClient.connect(MONGO_URI, {
      useNewUrlParser: true,
    });
    // db = await connection.db(global.__MONGO_DB_NAME__);
         db = await connection.db(dbName);

  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should insert a doc into collection', async () => {
    const  items  = db.collection('items');
    let newUser = {id:"", name:""}

    const mockUser = {id: 4, name: 'shirt'};
    //await  items.insertOne(mockUser);
    
    await  items.insertOne(mockUser,"-_id" ,function (error, response) {
        if(error) {
            console.log('Error occurred while inserting');
           // return 
        } else {
           console.log('inserted record', response.ops[0]);
           
          // return 
        }
    });

    let insertedUser = await  items.findOne({id: 4});
   
    newUser.id=insertedUser.id;
    newUser.name=insertedUser.name;
    //console.log(newUser)

    expect(newUser.id).toBe(mockUser.id);
  });
});