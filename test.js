const test = require('ava')
const randomString = require('.')

test('validate length of string', t => {
  let index = 20
  do {
    t.is(randomString(index).length, index)
  } while (index-- && index > 0)
  t.is(randomString().length, 10)
  t.is(randomString(1001).length, 1000)
})
