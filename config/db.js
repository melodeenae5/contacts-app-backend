const mongoose = require('mongoose');
require('dotenv').config();
const config = require('config');
const db = config.get('mongoURI');
// const UserSchema = require('../models/User');

mongoose.connect(db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
	console.log('Database connected');
});
// const connection = mongoose.createConnection(db, {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// });

// const UserSchema = new mongoose.Schema({
// 	username: {
// 		type: String,
// 		required: true,
// 	},
// 	hash: String,
// 	salt: String,
// });

// const User = connection.model('User', UserSchema);

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

// module.exports = connection;
