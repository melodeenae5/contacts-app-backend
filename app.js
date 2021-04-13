const express = require('express');
const session = require('express-session');
var passport = require('passport');
var crypto = require('crypto');

const connection = require('./config/db');
// const connectDB = require('./config/db');

const MongoStore = require('connect-mongo')(session);

require('./config/passport');

require('dotenv').config();

// routes
const users = require('./routes/api/users');
const contacts = require('./routes/api/contacts');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connectDB();

//session setup
const sessionStore = new MongoStore({
	mongooseConnection: connection,
	collection: 'sessions',
});

app.use(
	session({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: true,
		store: sessionStore,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24, // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
		},
	})
);

//passport

app.get('/', (req, res) => res.send('Hello world!'));

//routes
app.use('/api/users', users);
app.use('/api/contacts', contacts);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
