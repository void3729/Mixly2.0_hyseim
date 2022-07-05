module.exports = slice

var split = require('./split')

function slice (string, start, end, array) {
  array = split(string, ''), start = start || 0
  end = end === void 0 ? array.length : end
  return array.slice(start, end).join('')
}
