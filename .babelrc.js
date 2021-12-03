module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: '> 0.75%',
        include: [
          // This works, but why???
          'proposal-object-rest-spread',
        ],
        debug: true,
      },
    ],
  ],
}
