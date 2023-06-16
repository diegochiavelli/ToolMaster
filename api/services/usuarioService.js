const database = require('../models');
const { hash } = require('bcryptjs');

class UsuarioService {
    async cadastrar(dto) {
        const usuario = await database.Usuarios.findOne({where: { nomeUsuario: dto.nomeUsuario} });

        if (usuario){
            throw new Error('Usuário já está cadastrado.');
        }
        
        try {
            const senhaHash = await hash(dto.senha, 8);
            const novoUsuario = await database.Usuarios.create({
                nomeUsuario : dto.nomeUsuario,
                senha: senhaHash,
                status: dto.status
            });
            return novoUsuario;    

        } catch (error) {
            throw new Error('Erro ao cadastrar usuário'); 
        }
    }
}

module.exports = UsuarioService;