const database = require('../models');
const { hash } = require('bcryptjs');

class UsuarioService {
    async cadastrar(dto) {
        const email = await database.Usuarios.findOne({
            where: { 
                email: dto.email
            } 
        });

        if (email){
            throw new Error('Usuário já está cadastrado.');
        }
        
        try {
            const senhaHash = await hash(dto.senha, 8);
            const novoUsuario = await database.Usuarios.create({
                nome: dto.nome,
                email : dto.email,
                senha: senhaHash
            });
            return novoUsuario;    

        } catch (error) {
            throw new Error('Erro ao cadastrar usuário'); 
        }
    }
}

module.exports = UsuarioService;