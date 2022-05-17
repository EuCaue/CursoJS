const path = require('path'); // CommonJS !==  diferente do ES6

module.exports = { 
  // Só gera o arquivo com um monte de 
  // Pórem, mais rápido
  mode: 'production',
  
  // Arquivo de entrada, da onde o Source está vindo
  entry: './frontend/main.js',
  
  // "Resolvendo" o caminho para jogar o output do bundle.js
  // Multi-sistema, ___dirname significa que ele está buscando o caminho relativo
  // para o diretorio desse arquivo, e procurando as pastas que foi passada
  // como parametros
  // filename é nome do arquivo do -o
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js',
  },

  // Regras para os modulos
  //* Exclude está fazendo o webpack não analisar a pasta do node_modules por motivos obvios
  //* Test, é para verificar se o arquivo termina em JS  
  //* Loader, é para escolhe quando você o loader para transpilar o código 
  //* Options, são as opções do loader
  //* preset tá escolhendo quando Preset do babel no caso usar

  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: { 
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    }, { 
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },

  // Serve para mapear os arquivos que geram os bundles
  // para quando de bug, você receber em qual arquivo gerou o erro no bundle
  devtool: 'source-map',
}