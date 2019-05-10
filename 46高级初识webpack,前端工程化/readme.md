## 习题使用 webpack
1. 用 babel-loader 把 JS 代码转译一下
2. 用 sass-loader 把 SCSS 转译为 CSS


命令行
```
npm init
npm install --save-dev webpack

在开发环境中局部安装webpack-cli
npm install webpack-cli --save-dev  等同=>
npm install webpack-cli -D   


npm install --save-dev css-loader style-loader postcss-loader sass-loader
npm install sass-loader node-sass webpack --save-dev

webpack 3.x | babel-loader 8.x | babel 7.x
npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env webpack

webpack 3.x babel-loader 7.x | babel 6.x
npm install babel-loader babel-core babel-preset-env webpack

启动本地webpack
npx webpack 等同于 node_mudoles/.bin/webpack


```

webpack.config.js  直接搜索sass-loader  babel-loader
```
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]

    }
};
```