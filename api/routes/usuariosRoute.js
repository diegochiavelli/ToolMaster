const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const autenticado = require('../middleware/autenticado');

const router = Router();

router.use(autenticado);

router.get('/usuarios', UsuarioController.todosUsuarios);
router.get('/user', UsuarioController.usuarioLogado);
router.get('/usuarios/:id', UsuarioController.umUsuario);
router.post('/usuarios', UsuarioController.cadastrar);
router.put('/usuarios/:id', UsuarioController.atualizaUsuario);
router.delete('/usuarios/:id', UsuarioController.excluiUsuario);

module.exports = router;