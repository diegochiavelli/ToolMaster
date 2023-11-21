const { Router } = require('express');
const SaidaController = require('../controllers/SaidaController');

const router = Router();

router.get('/saidas', SaidaController.todosSaidas);
router.get('/saidas/:id', SaidaController.umSaida);
router.post('/saidas', SaidaController.criarSaida);
router.put('/saidas/:id', SaidaController.atualizaSaida);
router.delete('/saidas/:id', SaidaController.excluiSaida);

module.exports = router;