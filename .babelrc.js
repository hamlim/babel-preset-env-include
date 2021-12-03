module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: '> 0.75%',
        include: ['@babel/plugin-transform-spread'],
        debug: true,
      },
    ],
  ],
}
