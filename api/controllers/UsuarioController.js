const database = require('../models');
const UsuarioService = require('../services/usuarioService')

const { verify, decode } = require('jsonwebtoken');
const jsonSecret = require('../config/jsonSecret');

const usuarioService = new UsuarioService(); 

class UsuarioController {

    static async usuarioLogado(req, res) {
        const token = req.headers.authorization; 
        if (!token) {
            return res.status(401).send('Token não informado!');  
        }
        const [accessToken] = token.split(" ");
        
        
        try {

            verify(accessToken, jsonSecret.secret);
            const userLogado = await decode(accessToken);

            return res.status(200).json(userLogado);
        } catch (error) {

            res.status(401).send('Usuário não autorizado!');
        }
    }

    static async cadastrar(req, res){
        const { nome, email, senha} = req.body;

        try {
            const usuario = await usuarioService.cadastrar({nome, email, senha});

            res.status(201).send(usuario);
        } catch (error) {
            res.status(400).send({message: error.message});
        }
        
    }

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