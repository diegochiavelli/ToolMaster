const database = require('../models');

class UsuarioController {
    static async todosUsuarios(req, res) {
        try {
            const allUsuarios = await database.Usuarios.findAll();
            return res.status(200).json(allUsuarios);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async umUsuario(req, res) {
        const { id } = req.params;
        try {
            const umUsu = req.params = await database.Usuarios.findOne({ where: { id: Number(id) } });
            return res.status(200).json(umUsu);
        } catch (error) {
            return res.status(500).json(erro.message);
        }
    }

    static async criarUsuario(req, res) {
        const novoUsuario = req.body;
        try {
            const novoUsu = await database.Usuarios.create(novoUsuario);
            return res.status(201).json(novoUsu);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaUsuario(req, res) {
        const { id } = req.params;
        const alteraUsuario = req.body;
        try {
            await database.Usuarios.update(alteraUsuario, { where: { id: Number(id) } });
            const usuarioAtualizado = await database.Usuarios.findOne({ where: { id: Number(id) } });
            return res.status(200).json(usuarioAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async excluiUsuario(req, res) {
        const { id } = req.params;
        try {
            await database.Usuarios.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `O Usuário ${id} foi excluído.` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = UsuarioController;