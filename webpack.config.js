<<<<<<< HEAD
var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "client/dist");
var APP_DIR = path.resolve(__dirname, "client/src/");
// var APP_DIR = path.resolve(__dirname, 'client/src/sideBar');
// var APP_DIR = path.resolve(__dirname, "client/src/photoGallery");

var config = {
  entry: APP_DIR + "/index.jsx",

  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: "babel",
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  }
};

module.exports = config;
=======
module.exports = {
    entry: __dirname + '/client/src/index.jsx',
    module: {
      rules: [
        {
          test: [/\.jsx$/],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        }
      ]
    },
     output: {
      filename: 'bundle.js',
      path: __dirname + '/client/dist'
    }
  };
>>>>>>> fe1d9cb169be8371e17b0f68d641d6b37e00413b
