# create(src[, callback])

Create a yaml file.

- `dest` `<String>` Note that `dest` is a path for yaml file created.
- `callback` `<Function>`
  - `err` `<Error>`

## Example:

```js
const yaml = require("yaml-extra");

// With a callback:
yaml.create("/tmp/myfile", (err) => {
  if (err) return console.error(err);
  console.log("success!");
}); // create yaml file

// With Promises:
yaml
  .create("/tmp/myfile")
  .then(() => {
    console.log("success!");
  })
  .catch((err) => {
    console.error(err);
  });

// With async/await:
async function example() {
  try {
    await yaml.create("/tmp/myfile");
    console.log("success!");
  } catch (err) {
    console.error(err);
  }
}

example();
```
