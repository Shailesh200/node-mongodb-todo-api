// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';
const dbName = 'TodoApp';



MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connect to mongo db server',err);
    }
    console.log('Connected to Mongo DB server');

    // var db = client.db(dbName);

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false

    // }, (er, result) => {
    //     if(err){
    //         console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //         name: 'Shailesh',
    //         age: 21,
    //         location: 'Greater Noida'
    //       }, (err, result) => {
    //         if (err) {
    //           return console.log('Unable to insert user', err);
    //         }
    //     console.log(result.ops[0].__id);
    //   });
            
    // db.close();
});





