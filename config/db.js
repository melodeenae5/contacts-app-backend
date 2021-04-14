const mongoose = require('mongoose');
require('dotenv').config();
const config = require('config');
const db = config.get('mongoURI');

mongoose.connect(db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
	console.log('Database connected');
});
