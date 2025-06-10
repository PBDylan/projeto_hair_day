const path = require("path"); // Importando o módulo 'path' para manipulação de caminhos de arquivos
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Importando o plugin para gerar HTML
const CopyWebpackPlugin = require("copy-webpack-plugin"); // Importando o plugin para copiar arquivos

module.exports = {
  target: "web", // Define o alvo como web para aplicações web
  mode: "development", // Modo de desenvolvimento

  entry: path.resolve(__dirname, "src", "main.js"), // Ponto de entrada do aplicativo
  output: {
    filename: "main.js", // Nome do arquivo de saída
    path: path.resolve(__dirname, "dist"), // Diretório de saída
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Diretório onde os arquivos estáticos serão servidos
    },
    port: 3000, // Porta do servidor de desenvolvimento
    open: true, // Abre o navegador automaticamente
    liveReload: true, // Habilita recarregamento automático
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"), // Template HTML a ser usado
      favicon: path.resolve("src", "assets", "scissors.svg"), // Ícone do favicon
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"), // Diretório de origem dos assets
          to: path.resolve(__dirname, "dist", "src", "assets"), // Diretório de destino dos assets
        },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/, // Regra para arquivos CSS
        use: ["style-loader", "css-loader"], // Carregadores para processar CSS
      },
      {
        test: /\.js$/, // Regra para arquivos JavaScript
        exclude: /node_modules/, // Exclui a pasta node_modules
        use: {
          loader: "babel-loader", // Usando Babel para transpilar JavaScript
          options: {
            presets: ["@babel/preset-env"], // Preset para compatibilidade com navegadores modernos
          },
        },
      },
    ],
  },
};
