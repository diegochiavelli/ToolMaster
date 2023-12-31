const { Router } = require('express');
const EmprestimoController = require('../controllers/EmprestimoController');

const router = Router();

router.get('/emprestimos', EmprestimoController.todosEmprestimos);
router.get('/emprestimos/:id', EmprestimoController.umDoisEmprestimo);
router.get('/emprestimosequipamentos/:id', EmprestimoController.umEmprestimo);
router.get('/empequi/:id', EmprestimoController.umEmprestimoEquipamento);
router.get('/emprestimos/funcionario/:id', EmprestimoController.todosEmprestimosFuncionario);
router.post('/emprestimos', EmprestimoController.criarEmprestimo);
router.post('/emprestimosequipamentos', EmprestimoController.criarEmprestimoEquipamento);
router.put('/emprestimos/:id', EmprestimoController.atualizaEmprestimo);
router.put('/emprestimosequipamentos/:id', EmprestimoController.atualizaEmprestimoEquipamento);
router.put('/emprestimosconcluir/:id', EmprestimoController.concluirEmprestimo);
router.delete('/emprestimos/:id', EmprestimoController.excluiEmprestimo);

module.exports = router;