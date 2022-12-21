# create(src[, callback])

Create a yaml file.

- `dest` `<String>` Note that `dest` is a path for yaml file created.
- `successCallback` `<Function>`
- `errorCallback` `<Function>`

## Example

```js
const yaml = require('yaml-extra')

// With a callback:
yaml.create(
  '/tmp/myfile',
  (res) => {
    console.log(res)
  },
  (err) => {
    console.error(err)
  }
) // create yaml file

// With Promises:
yaml
  .create('/tmp/myfile')
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.error(err)
  })

// With async/await:
async function example() {
  try {
    const res = await yaml.create('/tmp/myfile')
    console.log(res)
  } catch (err) {
    console.error(err)
  }
}

example()
```
