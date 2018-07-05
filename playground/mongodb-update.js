// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';
const dbName = 'TodoApp';


MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connect to mongo db server',err);
    }
    console.log('Connected to Mongo DB server');

    var db = client.db(dbName);

    // db.collection('Todos')
    //     .findOneAndUpdate(
    //         {
    //             _id: new ObjectId('5b3d24b6315083c748df5d40')
    //         }, 
    //         {
    //             $set: 
    //                 {
    //                     completed: true
    //                 }
    //         },
    //         {
    //             returnOriginal: false
    //         }
    //     )
    //     .then((result) => {
    //         console.log(result);
    //     });

    db.collection('Users')
        .findOneAndUpdate(
            { _id: new ObjectId("5b3bccf23683432d6b250c9f")},
            { $inc: { age: -2, "metrics.orders": 1 },
              $set: { name: "Shivam" } },
            { returnOriginal: false }
        )
        .then((result) => {
            console.log(result);
        });
          
    // db.close();
});





