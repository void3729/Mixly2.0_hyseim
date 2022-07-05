module.exports = marker

function marker (string) {
  var n = 0, marker
  while (string.indexOf(marker = String.fromCharCode(n++)) >= 0) {}
  return marker
}
