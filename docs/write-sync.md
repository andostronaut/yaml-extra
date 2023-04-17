# writeSync(src[, content, options])

write a yaml file in sync.

- `src` `<String>` Note that `src` is a path for yaml file to write.
- `content` `<Object>` Content to write in yaml file.
- `options` `<Object>` Different options you can specify.
  - `encoder` `<String>` By default encoder is utf-8, you can use your encoder.
  - `override` `<Boolean>` By default override is false, you can set it to true.

## Example

```js
const ye = require('yaml-extra')

# Default use

function example() {
  try {
    const doc = ye.writeSync('/file.yaml', { foo: 'bar' })
    console.log(doc)
  } catch (err) {
    console.error(err)
  }
}

# By overriding override params

function example() {
  try {
    const doc = ye.writeSync('/file.yaml', { foo: 'bar' }, { override: true })
    console.log(doc)
  } catch (err) {
    console.error(err)
  }
}

example()
```
