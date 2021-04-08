module.exports = {
  presets: [
    ["@babel/preset-env", { targets: "defaults" }],
    ["@babel/preset-typescript", { jsxPragma: "h" }],
  ],
  plugins: [
    [
      "@babel/plugin-transform-react-jsx",
      {
        runtime: "automatic",
        importSource: "preact",
      },
    ],
    "@babel/plugin-transform-runtime",
  ],
};
