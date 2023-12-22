const mongoose = require('mongoose');

let mongoURL = 'mongodb+srv://ggabigabriela0:gpDTFkbmSNAnN9r4@cluster0.ftuhl9m.mongodb.net/hotel';

mongoose.connect(mongoURL);

let connection = mongoose.connection;

connection.on('error', () => console.log('connection failed'));
connection.on('connected', () => console.log('connection OK'));

module.exports=mongoose;