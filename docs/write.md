# write(src[, content, options, successCallback, errorCallback])

write a yaml file.

- `src` `<String>` Note that `src` is a path for yaml file to write.
- `content` `<Object>` Content to write in yaml file.
- `options` `<Object>` Different parameters you can specify.
  - `encoder` `<String>` By default encoder is utf-8, you can use your encoder.
  - `override` `<Boolean>` By default override is false, you can set it to true.
- `successCallback` `<Function>` Callback for managing doc response.
- `errorCallback` `<Function>` Callback for managing error.

## Example

```js
const ye = require('yaml-extra')

// With a callback:
ye.write(
  '/file.yaml',
  { foo: 'bar' },
  // { override: true } # you can override to true , by default it's false
  (res) => {
    console.log(res)
  },
  (err) => {
    console.error(err)
  }
)

// With Promises:
ye.write(
  '/file.yaml',
  { foo: 'bar' }
  // { override: true } # you can override to true , by default it's false
)
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.error(err)
  })

// With async/await:
async function example() {
  try {
    const res = await ye.write(
      '/file.yaml',
      { foo: 'bar' }
      // { override: true } # you can override to true , by default it's false
    )
    console.log(res)
  } catch (err) {
    console.error(err)
  }
}

example()
```
