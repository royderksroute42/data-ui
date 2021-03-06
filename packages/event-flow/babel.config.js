module.exports = {
  plugins: ['@babel/plugin-proposal-export-default-from'],
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: 'commonjs',
        shippedProposals: true,
        targets: {
          ie: 10,
        },
      },
    ],
    '@babel/preset-react',
  ],
};
