# readSync(src[, options])

read a yaml file in sync.

- `src` `<String>` Note that `src` is a path for yaml file to read.
- `options` `<Object>`
  - `encoder` `<String>`
  - `dump` `<Boolean>`

## Example

```js
const yaml = require('yaml-extra')

// read file
yaml.readSync('/tmp/myfile')

// With async/await:
function example() {
  try {
    const res = yaml.readSync('/tmp/myfile')
    console.log(res)
  } catch (err) {
    console.error(err)
  }
}

example()
```
