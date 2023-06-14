const { Router } = require('express');
const EquipamentoController = require('../controllers/EquipamentoController');

const router = Router();

router.get('/equipamentos', EquipamentoController.todosEquipamentos);
router.get('/equipamentos/:id', EquipamentoController.umEquipamento);
router.post('/equipamentos', EquipamentoController.criarEquipamento);
router.put('/equipamentos/:id', EquipamentoController.atualizaEquipamento);
router.delete('/equipamentos/:id', EquipamentoController.excluiEquipamento);

module.exports = router;