const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');

const router = Router();

router.get('/usuarios', UsuarioController.todosUsuarios);
router.get('/usuarios/:id', UsuarioController.umUsuario);
router.post('/usuarios', UsuarioController.criarUsuario);
router.put('/usuarios/:id', UsuarioController.atualizaUsuario);
router.delete('/usuarios/:id', UsuarioController.excluiUsuario);

module.exports = router;