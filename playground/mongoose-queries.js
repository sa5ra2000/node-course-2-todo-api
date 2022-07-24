const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '62dd45bbb80356a03cc78a1e1';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', JSON.stringify(todos, undefined, 2));
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', JSON.stringify(todo, undefined, 2));
// });

// Todo.findById(id).then((todo) => {
//     if(! todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', JSON.stringify(todo, undefined, 2));
// }).catch((e) => console.log(e));

var id = "62dc341e4ac7ee8c3941e4a2";

User.findById(id).then((user) => {
    if(! user){
        return console.log('User not found');
    }
    console.log('User', JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
}).catch((e) => console.log(e));






 