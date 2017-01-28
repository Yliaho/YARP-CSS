module.exports = {
    entry: './app/main.js',
    output: {
        filename: 'bundle.js',
        path: './dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 
                [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue',
                include: './app'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: './app',
                exclude: /node_modules/,
            }
        ],
    }
};