const { Router } = require('express');
const EntradaController = require('../controllers/EntradaController');

const router = Router();

router.get('/entradas', EntradaController.todosEntradas);
router.get('/entradas/:id', EntradaController.umEntrada);
router.post('/entradas', EntradaController.criarEntrada);
router.put('/entradas/:id', EntradaController.atualizaEntrada);
router.delete('/entradas/:id', EntradaController.excluiEntrada);

module.exports = router;