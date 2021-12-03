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
