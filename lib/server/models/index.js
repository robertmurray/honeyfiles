var Sequelize = require('sequelize-sqlite').sequelize;
var sqlite  = require('sequelize-sqlite').sqlite;
var path = require('path');
var mkdirp = require('mkdirp');
var fs = require('fs');
var argv = require('optimist').argv;

var dir = path.join(__dirname, '../../../var');

if (!fs.existsSync(dir)) {
  console.log("[-] Creating path:", dir);
  mkdirp.sync(dir);
};

var filepath = path.join(dir, 'db.sqlite');

var sequelize = new Sequelize('honeyfiles', 'username', 'password', {
  dialect: 'sqlite',
  storage: filepath 
});

exports.sequelize = sequelize;

exports.User = require('./user')(sequelize);
exports.Campaign = require('./campaign')(sequelize);
exports.Document = require('./document')(sequelize);

exports.Campaign.hasMany(exports.Document);

var reset = false || argv['database-reset'];

exports.User.sync({ force: reset });
exports.Campaign.sync({ force: reset });
exports.Document.sync({ force: reset });