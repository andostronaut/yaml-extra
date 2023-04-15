# copySync(src)

Copy a yaml file in sync.

- `src` `<String>` Note that `src` is a path for yaml file to write.
- `dest` `<String>` Note that `dest` is a path for yaml file created.

## Example

```js
const yaml = require('yaml-extra')

// create file
yaml.copySync('source-file', '/tmp/myfile')

// With async/await:
function example() {
  try {
    const res = yaml.copySync('source-file', '/tmp/myfile')
    console.log('success!', res)
  } catch (err) {
    console.error(err)
  }
}

example()
```
