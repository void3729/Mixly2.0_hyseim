module.exports = substr

var split = require('./split')

function substr (string, start, length, array, end) {
  array = split(string, ''), start = start || 0
  length = length === void 0 ? array.length : length
  end = start < 0 ? void 0 : start + length
  return length < 0 ? '' : array.slice(start, end).join('')
}
