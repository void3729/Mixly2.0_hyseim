module.exports = length

var multi = require('multichar-regex')
var marker = require('./util/marker')

function length (string) {
  return string.replace(multi, marker(string)).length
}
