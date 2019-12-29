# foldr

Inspired by https://wiki.haskell.org/Foldr_Foldl_Foldl'

### usage

```javascript
const foldr = require('@m1yh3m/foldr.fn.node.lib')

const sum = (a, b) => a + b         // for numbers
const concatenate = (a, b) => a + b // for strings

foldr(sum, 0, [1, 2, 3, 4, 5, 6]) // should be 21
foldr(concatenate, '', ['a ', 'string ', 'is ', 'concatenated.']) // should be 'a string is concatenated.'

```
