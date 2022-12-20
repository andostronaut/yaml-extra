# readSync(src)

read a yaml file.

- `src` `<String>` Note that `src` is a path for yaml file to read.

## Example

```js
const yaml = require('yaml-extra')

// read file
yaml.readSync('/tmp/myfile')

// With async/await:
async function example() {
  try {
    const res = await yaml.readSync('/tmp/myfile')
    console.log(res)
  } catch (err) {
    console.error(err)
  }
}

example()
```
