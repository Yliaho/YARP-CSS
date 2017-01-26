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
            use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            ],
        },
        {
            test: /\.useable\.css$/,
            use: [
            { 
                loader: "style-loader",
                options: {
                useable: true
                },
            },
            { loader: "css-loader" },
            ],
        },
        ],
    },
};