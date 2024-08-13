const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // Импортируем CopyWebpackPlugin

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader', // Обработка CSS с помощью PostCSS
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]', // Перенос изображений в папку dist/images
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css', // Название выходного CSS файла
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/images'), to: 'images' }, // Копирование всех изображений из папки src/images в dist/images
            ],
        }),
        new ImageMinimizerPlugin({
            minimizer: {
                implementation: ImageMinimizerPlugin.imageminGenerate,
                options: {
                    plugins: [
                        ['imagemin-mozjpeg', { quality: 75 }],
                        ['imagemin-pngquant', { quality: [0.65, 0.90], speed: 4 }],
                    ],
                },
            },
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        liveReload: true,
        watchFiles: ['src/**/*.html', 'src/**/*.css', 'src/**/*.js'],
    },
    mode: 'development',
    optimization: {
        minimize: true,
        minimizer: [
            '...', // Использовать существующие минимизаторы (например, `terser-webpack-plugin` для JavaScript)
            new CssMinimizerPlugin(), // Минимизация CSS
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminGenerate,
                    options: {
                        plugins: [
                            ['imagemin-mozjpeg', { quality: 75 }],
                            ['imagemin-pngquant', { quality: [0.65, 0.90], speed: 4 }],
                        ],
                    },
                },
            }),
        ],
    },
};
