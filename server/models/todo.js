var mongoose = require('mongoose');

// Todo model
var Todo = mongoose.model('Todo', {
    text: {
        type: String, 
        required: true,
        minlength: 1, 
        // reomvoe the spaces before and after the string
        trim: true
    }, 
    completed: {
        type: Boolean,
        default: false
    }, 
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: 'cook dinner'
// });

// var newTodo = new Todo({
//     //haye2bal lw 7atet value b true aw hata rakam, hayet3amel m3ahom 3la enhom string..
//     text: 'Somthing to do'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', JSON.stringify(doc, undefined, 2));
// }, (err) => {
//     console.log('Unable to save todo.');
// });


module.exports = {Todo};