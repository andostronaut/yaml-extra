# read(src[, options, successCallback, errorCallback])

Read a yaml file.

- `src` `<String>` Note that `dest` is a path for yaml file to read.
- `options` `<Object>`
  - `encoder` `<String>`
  - `dump` `<Boolean>`
- `successCallback` `<Function>`
- `errorCallback` `<Function>`

## Example

```js
const yaml = require('yaml-extra')

// With a callback:
yaml.read(
  '/tmp/myfile',
  (res) => {
    console.log(res)
  },
  (err) => {
    console.error(err)
  }
) // read yaml file

// With Promises:
yaml
  .read('/tmp/myfile')
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.error(err)
  })

// With async/await:
async function example() {
  try {
    const res = await yaml.read('/tmp/myfile')
    console.log(res)
  } catch (err) {
    console.error(err)
  }
}

example()
```
