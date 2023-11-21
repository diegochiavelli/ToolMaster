const bodyParser = require('body-parser');
const funcionarios = require('./funcionariosRoute');
const equipamentos = require('./equipamentosRoute');
const veiculos = require('./veiculosRoute');
const usuarios = require('./usuariosRoute');
const emprestimos = require('./emprestimosRoute');
const auth = require('./authRoute');
const entradas = require('./entradasRoute');
const saidas = require('./saidasRoute');

const cors = require('cors');

module.exports = app => {

    app.use(cors());

    // app.use((req, res, next) =>{
    //     res.header("Access-Control-Allow-Origin", '*');
    //     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    //     res.header("Access-Control-Allow-Headers", "Content-Type");
    //     app.use(cors());
    //     next();
    // });

    app.use(bodyParser.json(), auth, funcionarios, equipamentos, veiculos, usuarios, emprestimos, entradas, saidas);
}