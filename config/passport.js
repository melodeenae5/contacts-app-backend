const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const connection = require('./db');
const User = connection.models.User;
