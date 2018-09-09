// node ./yargs.js -n tom
var argv = require('yargs')
  .alias('n', 'name')
  .argv;

console.log('hello ', argv.name);