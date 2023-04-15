# writeSync(src[, content, options])

write a yaml file in sync.

- `src` `<String>` Note that `src` is a path for yaml file to write.
- `content` `<Object>`
- `options` `<Object>`
  - `encoder` `<String>`
  - `dump` `<Boolean>`

## Example

```js
const yaml = require('yaml-extra')

function example() {
  try {
    const res = yaml.write('/tmp/myfile', { foo: 'bar' })
    console.log(res)
  } catch (err) {
    console.error(err)
  }
}

example()
```
