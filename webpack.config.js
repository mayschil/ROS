'use strict';

const webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	WebpackNotifierPlugin = require('webpack-notifier'),
	path = require('path');

module.exports = {
	context: path.resolve(__dirname, 'app'),
	entry: {
		main: './index.js'
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'app.js'
	},
	devtool: '#eval-source-map',
	module: {
		loaders: [
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "sass-loader" // compiles Sass to CSS
				}]
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			{

			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.less$/,
				loader: "style-loader!css-loader!less-loader"
			},
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url?limit=80192&name=[name].[ext]'
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=10000&mimetype=application/font-woff"
			},
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "file-loader"
			}
		]
	},



	plugins: [
		new WebpackNotifierPlugin({ alwaysNotify: true }),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html'
		})
	]
};