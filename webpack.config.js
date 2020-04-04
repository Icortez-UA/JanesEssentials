var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/pages./home.js'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        //global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}