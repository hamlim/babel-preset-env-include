# `preset-env` and `include` quirks

I'm not sure if this is a bug or I'm not configuring babel properly, however it
seems like the `include` setting for `@babel/preset-env` doesn't seem to work.

**Input:**

```js
// input (src/index.js)

const foo = {
  ...{ bar: true },
}
```

**Babel Config:**

```js
// babel config (.babelrc.js)
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: '> 0.75%',
        // '@babel/plugin-transform-spread' also doesn't work
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

const foo = {
  // ⚠️  I expect this spread to be compiled away!
  ...{ bar: true },
}
```
