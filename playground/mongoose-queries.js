const {ObjectId} = require('mongodb');

const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b4116531c33732063a5daa22'; // Todo Id
var id = '5b3e6f353174522313e3a0d3'; // User Id

// if(!ObjectId.isValid(id)){
//     console.log('Id is not Valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos:',todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo:',todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id Not Found');
//     }
//     console.log('Todo By Id:',todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user)=> {
    if(!user){
        return console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});