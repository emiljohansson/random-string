# random-string

Generates a random string.

## Install

```
$ npm install @emiljohansson/random-string
```

## Usage

```js
import randomString from 'random-string'
randomString()
// => '1k59GeX6Nn'
```

## API

### randomString(props) => string;

Returns a random string.

#### length

Type: `number`

Optional length of the string. Default is 10.

#### letters

Type: `boolean`

Includes alphabetical letters in the string. Default is true.

#### numeric

Type: `boolean`

Includes numbers in the string. Default is true.

#### symbols

Type: `boolean`

Includes special characters in the string. Default is false.

## License

MIT © [Emil Johansson](http://emiljohansson.dev)
