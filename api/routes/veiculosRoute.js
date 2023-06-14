const { Router } = require('express');
const VeiculoController = require('../controllers/VeiculoController');

const router = Router();

router.get('/veiculos', VeiculoController.todosVeiculos);
router.get('/veiculos/:id', VeiculoController.umVeiculo);
router.post('/veiculos', VeiculoController.criarVeiculo);
router.put('/veiculos/:id', VeiculoController.atualizaVeiculo);
router.delete('/veiculos/:id', VeiculoController.excluiVeiculo);

module.exports = router;