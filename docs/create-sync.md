# createSync(src)

Create a yaml file in sync.

- `dest` `<String>` Note that `dest` is a path for yaml file created.

## Example

```js
const yaml = require('yaml-extra')

// create file
yaml.createSync('/tmp/myfile')

// With async/await:
function example() {
  try {
    const res = yaml.createSync('/tmp/myfile')
    console.log('success!', res)
  } catch (err) {
    console.error(err)
  }
}

example()
```
