module.exports = {
    debug: true,
    devtool: 'sourcemap',
    entry: "./client/src/client.js", //'./client/src/client.js',
    output: {
        path: './client/dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }]
    },
    resolve: {
        extensions: ["", ".js"]
    }
};
