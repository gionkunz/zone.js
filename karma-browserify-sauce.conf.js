// Karma configuration

module.exports = function (config) {
  require('./karma-browserify.conf')(config);
  require('./sauce.conf')(config);
};