const { Router } = require('express');
const EmprestimoController = require('../controllers/EmprestimoController');

const router = Router();

router.get('/emprestimos', EmprestimoController.todosEmprestimos);
router.get('/emprestimos/:id', EmprestimoController.umEmprestimo);
router.post('/emprestimos', EmprestimoController.criarEmprestimo);
router.put('/emprestimos/:id', EmprestimoController.atualizaEmprestimo);
router.delete('/emprestimos/:id', EmprestimoController.excluiEmprestimo);

module.exports = router;