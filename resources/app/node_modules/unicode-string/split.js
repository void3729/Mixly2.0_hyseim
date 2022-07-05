module.exports = split

var multi = require('multichar-regex')
var marker = require('./util/marker')

function split (string, point, characters, reindex, match) {
  if (point == null) return [string]

  characters = string
    .replace(multi, marker(string))
    .split(point || '')

  reindex = 0
  while (match = multi.exec(string)) {
    match.index -= reindex
    reindex += match[0].length - 1
    characters.splice(match.index, 1, match[0])
  }

  return characters
}
