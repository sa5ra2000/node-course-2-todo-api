var mongoose = require('mongoose');

// User model
var User = mongoose.model('User', {
    email: {
        type: String, 
        required: true,
        minlength: 1, 
        // reomvoe the spaces before and after the string
        trim: true
    }
});  

// var newUser = new User({
//     email: '  sa5ra@exapmle.com  '
// });

// newUser.save().then((document) => {
//     console.log('User saved', JSON.stringify(document, undefined, 2));
// }, (error) => {
//     console.log('Unable to save user')
// });


module.exports = {User};