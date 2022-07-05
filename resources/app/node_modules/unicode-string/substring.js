module.exports = substring

var split = require('./split')

function substring (string, start, end, array) {
  array = split(string, ''), start = start || 0
  end = Math.max(0, end === void 0 ? array.length : end)
  return array.slice(Math.min(start, end), Math.max(start, end)).join('')
}
