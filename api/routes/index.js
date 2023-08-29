const bodyParser = require('body-parser');
const funcionarios = require('./funcionariosRoute');
const equipamentos = require('./equipamentosRoute');
const veiculos = require('./veiculosRoute');
const usuarios = require('./usuariosRoute');
const emprestimos = require('./emprestimosRoute');
const auth = require('./authRoute');
const cors = require('cors');

module.exports = app => {
    
    app.use((req, res, next) =>{
        res.header("Access-Control-Allow-Origin", "*");

        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");

        res.header("Access-Control-Allow-Headers", "Content-Type");

        app.use(cors());

        next();
    });
    app.use(bodyParser.json(), auth, funcionarios, equipamentos, veiculos, usuarios, emprestimos);

}