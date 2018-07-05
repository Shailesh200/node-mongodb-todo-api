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
    //     .deleteMany({text: 'Eat Lunch'})
    //     .then((result) => {
    //         console.log(result);
    //     });

    // db.collection('Todos')
    //     .deleteOne({text: 'Eat Lunch'})
    //     .then((result) => {
    //         console.log(result);
    //     });

    // db.collection('Todos')
    //     .findOneAndDelete({completed: false})
    //     .then((result) => {
    //         console.log(result);
    //     });



    // db.collection('Users')
    //     .deleteMany({name: "Shailesh")})
    //     .then((result) => {
    //         console.log(result);
    //     });

    // db.collection('Users')
    //     .deleteOne({_id: new ObjectId('5b3cf067b39c26132cf1af86')})
    //     .then((result) => {
    //         console.log(result);
    //     });

    // db.collection('Users')
    //     .findOneAndDelete({_id: new ObjectId('5b3cdac6f7d6890db8cf3a47')})
    //     .then((result) => {
    //         console.log(result);
    //     });

          
    // db.close();
});





