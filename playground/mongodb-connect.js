//tare2ten ll ketaba..
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// shar7 tare2t tasmeyaa
// var user = {name: 'ay haga', age: 21};
// var {name} = user;
// console.log(name);

MongoClient.connect("mongodb://127.0.0.1:27017/TodoApp", (err, db) => {
    if(err){
        console.log(err.message);

        // return hena bdal ma a3mel if else belzabtt..
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //_______________________________________________

    db.collection('Users').insertOne({
        Name: 'Yousef Khaled',
        Age: 22,
        Location: 'No-Where'
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert user', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
        // console.log(result.ops[0]._id.getTimestamp());
    });

    db.close();
});