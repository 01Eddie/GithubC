const HtmlWebpackPlugin = require('html-webpack-plugin'); //esto tiene que ser distribuido a la carpeta dist, asi que llamamos a este modulo
const path = require('path'); //este modulo sirve para que se automatice o transforme -- / o como windows \ para reconocer la ruta es por eso este modulo se necesita para no tener estos problemas 

module.exports = { //entry: sera donde localizara primero
    entry: './src/app/index.js',
    output: {
        path: path.join(  __dirname, 'dist'), //donde estar la carpeta que creara
        filename: 'bundle.js' // como lo convertira, este tendra todo el cod de js
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'  //esto hara que convierta el index.html a la carpeta dist que es de produccion
        })
    ]
}