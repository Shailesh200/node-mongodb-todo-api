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
    //   .find({__id: new ObjectId('5b3cf39e208c84e5b2ae2cca')})
    //   .toArray()
    //   .then((docs) => {
    //       console.log('Todos:\n');
    //       console.log(JSON.stringify(docs, undefined, 2));
    //   }, (err) => {
    //   console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos')
    //   .find()
    //   .count()
    //   .then((count) => {
    //       console.log(`Todos Count:${count}`);
    //   }, (err) => {
    //   console.log('Unable to fetch todos', err);
    // });

    db.collection('Users')
    .find({name: 'Shailesh'})
    .toArray()
    .then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
    console.log('Unable to fetch todos', err);
    });

    // db.close();
});





