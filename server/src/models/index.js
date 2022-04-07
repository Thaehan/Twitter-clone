const dbConfig = require('../config/config.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.tutorials = require('./tutorial.model')(mongoose);
db.users = require('./user.model')(mongoose);

module.exports = db;
