const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const maxLength = 1000

module.exports = (length = 10) => {
  let value = ''
  let index = length
  if (index > maxLength) {
    index = maxLength
  }
  while (index--) {
    const charIndex = Math.floor(Math.random() * characters.length)
    value += characters[charIndex]
  }
  return value
}
