const { Router } = require('express');
const FuncionarioController = require('../controllers/FuncionarioController');

const router = Router();

router.get('/funcionarios', FuncionarioController.todosFuncionarios);
router.get('/funcionarios/:id', FuncionarioController.umFuncionario);
router.post('/funcionarios', FuncionarioController.criarFuncionario);
router.put('/funcionarios/:id', FuncionarioController.atualizaFuncionario);
router.delete('/funcionarios/:id', FuncionarioController.excluiFuncionario);

module.exports = router;