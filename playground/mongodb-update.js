const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://127.0.0.1:27017/TodoApp", (err, db) => {
    if(err){
        console.log(err.message);

        // return hena bdal ma a3mel if else belzabtt..
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    //Todos
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('62dbff0d321ff655d9493a52')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    //Users
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('62d81f5352d75326c09a7271')
    }, {
        $set: {
            Name: 'Joo'
        },
        $inc: {
            Age : +1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    db.close();
});

