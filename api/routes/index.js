const bodyParser = require('body-parser');
const funcionarios = require('./funcionariosRoute');
const equipamentos = require('./equipamentosRoute');
const veiculos = require('./veiculosRoute');
const usuarios = require('./usuariosRoute');
const emprestimos = require('./emprestimosRoute');


module.exports = app => {
    app.use(bodyParser.json(), funcionarios, equipamentos, veiculos, usuarios, emprestimos);
}