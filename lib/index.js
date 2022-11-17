"use strict";

exports.__esModule = true;
exports.default = void 0;
var _default = (_, options = {}) => {
  return {
    name: 'docusaurus-plugin-astroturf',
    configureWebpack() {
      return {
        module: {
          rules: [{
            test: /\.(j|t)sx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'astroturf/loader',
              options: Object.assign({
                extension: '.module.css',
                useAltLoader: true
              }, options)
            }
          }]
        }
      };
    }
  };
};
exports.default = _default;