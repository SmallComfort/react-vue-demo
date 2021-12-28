const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        build: './src/index.js',
        vendor: [
            'react',
            'react-dom',
            'react-vue',
            'react-vue-helper',
            'vuex',
            'prop-types'
        ]
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '',
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'react-vue-loader',
                options: {
                    vue: './vue.config.js'
                }
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [{
                    loader: "style-loader",
                    options: {
                        injectType: 'linkTag',
                        insert: 'head',
                        attributes: { id: "id" }
                    }
                },
                {
                    loader: "css-loader",
                    options: {
                        sourceMap: true,
                        /*modules: {
                            namedExport: true,
                            localIdentName: '[local]_[hash:base64:8]',
                            localIdentContext: path.resolve(__dirname, "src")
                        },*/

                    }
                },
                {
                    loader: "sass-loader",
                    options: {
                        minimize: false
                    }
                }]
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',    // where the fonts will go
                    }
                }]
            },
            {
                test: /\.(gif|png|jpe?g)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',    // where the fonts will go
                    }
                }]
            }]
    },

    resolve: {
        extensions: ['.vue', '.js']
    },

      plugins: [
          new HtmlWebpackPlugin({
              publicPath: './',
              inject:false,
              template: 'public/index.html',
              meta: {
                charset: { charset: 'utf-8' },
                viewport: 'width=device-width, initial-scale=1'
              },
              minify: false
          })
      ],

    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
      }
};
