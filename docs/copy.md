# copy(src[, successCallback, errorCallback])

Copy a yaml file.

- `src` `<String>` Note that `src` is a path for yaml file to write.
- `dest` `<String>` Note that `dest` is a path for yaml file copyd.
- `successCallback` `<Function>`
- `errorCallback` `<Function>`

## Example

```js
const yaml = require('yaml-extra')

// With a callback:
yaml.copy(
  'source-file'
  '/tmp/myfile',
  (res) => {
    console.log(res)
  },
  (err) => {
    console.error(err)
  }
) // copy yaml file

// With Promises:
yaml
  .copy('source-file', '/tmp/myfile')
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.error(err)
  })

// With async/await:
async function example() {
  try {
    const res = await yaml.copy('source-file', '/tmp/myfile')
    console.log(res)
  } catch (err) {
    console.error(err)
  }
}

example()
```
