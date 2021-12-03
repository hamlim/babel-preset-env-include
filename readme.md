# `preset-env` and `include` quirks

I'm not sure if this is a bug or I'm not configuring babel properly, however it
seems like the `include` setting for `@babel/preset-env` doesn't seem to work.

```js
// input (src/index.js)

const foo = {
  ...{ bar: true },
}
```

```js
// babel config (.babelrc.js)
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: '> 0.75%',
        include: ['transform-spread'],
        debug: true,
      },
    ],
  ],
}
```

**Output:**

```js
// output (dist/index.js)
'use strict'

// ⚠️  I expect this spread to be compiled away!
const foo = {
  ...{
    bar: true,
  },
}
```
