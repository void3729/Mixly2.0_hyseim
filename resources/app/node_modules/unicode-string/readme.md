# unicode-string
a collection of unicode-aware string functions

[![ci](https://travis-ci.org/michaelrhodes/unicode-string.svg?branch=master)](https://travis-ci.org/michaelrhodes/unicode-string)

## install
```sh
npm install https://pkg.mkr.sx/unicode-string/2.1.0.tgz
```

## use
```js
var unicode = require('unicode-string')
var string = 'o 🇨🇦'

string.length
> 6
unicode.length(string)
> 3

string.split('')
> ['o',' ','\ud83c','\udde8','\ud83c','\udde6']
unicode.split(string, '')
> ['o',' ','🇨🇦']

string.substring(2, 3)
> '\ud83c'
unicode.substring(string, 2, 3)
> '🇨🇦'

string.substr(2, 1)
> '\ud83c'
unicode.substr(string, 2, 1)
> '🇨🇦'

string.slice(0, -2)
> 'o \ud83c\udde8'
unicode.slice(string, 0, -2)
> 'o'
```

## obey
[CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/)
