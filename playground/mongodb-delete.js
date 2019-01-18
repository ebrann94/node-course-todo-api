//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (error, client) => {
    if (error) {
        return console.log('Unable to connect ot MongoDB server')
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // deleteMany - deletes all documents matching query
    db.collections('Todos').deleteMany({}).then(result => {
        console.log(result);
    });

    // deleteOne - deletes only the first document matching the query
    db.collections('Todos').deleteOne({}).then(result => {
        console.log(result);
    });

    // findOneAndDelete - finds a document and deletes it and returns the deleted document
    db.collections('Todos').deleteAndFindOne({}).then(result => {
        console.log(result);
    })

    //client.close();
});