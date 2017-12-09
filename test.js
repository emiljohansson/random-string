import test from 'ava'
import randomString from '.'

test(t => {
  let index = 20
  do {
    t.is(randomString(index).length, index)
  } while (index-- && index > 0)
  t.is(randomString().length, 10)
  t.is(randomString(1001).length, 1000)
})
