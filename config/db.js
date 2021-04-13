const mongoose = require('mongoose');
require('dotenv').config();
const config = require('config');
const db = config.get('mongoURI');
const UserSchema = require('../models/User');

const connection = mongoose.createConnection(db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const User = connection.model('User', UserSchema);

// const connectDB = async () => {
// 	try {
// 		await mongoose.connect(db, {
// 			useNewUrlParser: true,
// 		});

// 		console.log('MongoDB is Connected...');
// 	} catch (err) {
// 		console.error(err.message);
// 		process.exit(1);
// 	}
// };

module.exports = connection;
