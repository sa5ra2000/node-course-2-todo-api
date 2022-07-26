const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({
    _id: '62e004a1321ff655d9493ab0'
}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('62e004a1321ff655d9493ab0').then((todo) => {
    console.log(JSON.stringify(todo, undefined, 2));
});

