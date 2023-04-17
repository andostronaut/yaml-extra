# read(src[, options, successCallback, errorCallback])

read a yaml file.

- `src` `<String>` Note that `src` is a path for yaml file to read.
- `options` `<Object>` Different options you can specify.
  - `encoder` `<String>` By default encoder is utf-8, you can use your encoder.
  - `dump` `<Boolean>` By default dump is false, you can set it to true.
- `successCallback` `<Function>` Callback for managing doc response.
- `errorCallback` `<Function>` Callback for managing error.

## Example

```js
const ye = require('yaml-extra')

// With a callback:
ye.read(
  '/file.yaml',
  (doc) => {
    console.log(doc)
  },
  (err) => {
    console.error(err)
  }
)

// With Promises:
ye.read('/file.yaml')
  .then((doc) => {
    console.log(doc)
  })
  .catch((err) => {
    console.error(err)
  })

// With async/await:
async function example() {
  try {
    const doc = await ye.read('/file.yaml')
    console.log(doc)
  } catch (err) {
    console.error(err)
  }
}

example()
```
