const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/Todo');
const {User} = require('./models/User');

const app = express();

app.post('/todos', (req, res) => {

});
app.listen(3000, () => {
    Console.log('Server running on port 300');
})
