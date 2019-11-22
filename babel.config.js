module.exports = function (api) {
  api.cache(true)
  return {
    "presets": [
      ["@babel/preset-env", { "modules": false }]
    ],
    "plugins": [
    ],
    "ignore": [
      "node_modules/**"
    ],
    "env": {
      "test": {
        "presets": [
          "@babel/preset-env"
        ],
        "plugins": [
          '@babel/plugin-transform-runtime'
        ],
      }
    }
  }
}
