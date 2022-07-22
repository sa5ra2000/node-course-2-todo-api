const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://127.0.0.1:27017/TodoApp", (err, db) => {
    if(err){
        console.log(err.message);

        // return hena bdal ma a3mel if else belzabtt..
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    // lw sebna find fadya hayeraga3 kolo.
    // {completed: false}
    // db.collection('Todos').find({
    //     _id: new ObjectID('62d814064366250a34e32d81')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch documents', err);
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to count.', err);
    // })

    db.collection('Users').find({Name: 'Yousef Khaled'}).toArray().then((docs) => {
        console.log(`Todos documents: ${JSON.stringify(docs, undefined, 2)}`);
    }, (err) => {
        console.log('Unable to fetch documents.', err);
    })

    db.collection('Users').find({Name: 'Yousef Khaled'}).count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to count.', err);
    })
    
    //db.close();
});