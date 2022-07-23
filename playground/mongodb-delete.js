const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://127.0.0.1:27017/TodoApp", (err, db) => {
    if(err){
        console.log(err.message);

        // return hena bdal ma a3mel if else belzabtt..
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    //Todos
    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });


    //Users
    // db.collection('Users').deleteMany({Name: 'Yousef Khaled'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete(
        {
        _id: new ObjectID("62d81fb387e7262eaccc9191")
        }
    ).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    db.close();
});

