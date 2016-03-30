const config = require('nconf');
const path = require('path');
config.argv();
config.env({separator: '__'});
config.file('local', path.join(__dirname, '/local.json'));
config.file('base', path.join(__dirname, '/base.json'));
module.exports = {get : config.get.bind(config)};
