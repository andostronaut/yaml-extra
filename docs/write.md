# write(src[, content, options, successCallback, errorCallback])

write a yaml file.

- `src` `<String>` Note that `dest` is a path for yaml file to write.
- `content` `<Object>`
- `options` `<Object>`
  - `encoder` `<String>`
  - `dump` `<Boolean>`
- `successCallback` `<Function>`
- `errorCallback` `<Function>`

## Example

```js
const yaml = require('yaml-extra')

// With a callback:
yaml.write(
  '/tmp/myfile',
  { foo: 'bar' },
  (res) => {
    console.log(res)
  },
  (err) => {
    console.error(err)
  }
) // write yaml file

// With Promises:
yaml
  .write('/tmp/myfile', { foo: 'bar' })
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.error(err)
  })

// With async/await:
async function example() {
  try {
    const res = await yaml.write('/tmp/myfile', { foo: 'bar' })
    console.log(res)
  } catch (err) {
    console.error(err)
  }
}

example()
```
