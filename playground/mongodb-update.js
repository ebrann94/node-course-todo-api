//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (error, client) => {
    if (error) {
        return console.log('Unable to connect ot MongoDB server')
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // In updater object must use mongodb updater operators
    db.collection('Todos').findOneAndUpdate({/*Filter*/}, {/*Updater*/})

    //client.close();
});