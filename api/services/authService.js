const { compare } = require('bcryptjs');
const database = require('../models');
const { sign } = require('jsonwebtoken');
const jsonSecret = require('../config/jsonSecret');

class AuthService {
    async login(dto){
        const usuario = await database.Usuarios.findOne({
            attributes: ['id', 'nome', 'email', 'senha'], where: { email: dto.email}
        });

        if (!usuario){
            throw new Error('Usuário ou senha inválido.')
        }

        const comparaSenha = await compare(dto.senha, usuario.senha);

        if(!comparaSenha){
            throw new Error('Usuário ou senha inválido!');
        }

        const accessToken = sign({
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        }, jsonSecret.secret, {
            expiresIn: 86400
        });
        const user = await database.Usuarios.findOne({
            attributes: ['id', 'nome', 'email'], where: { email: dto.email}
        });
        return { accessToken, user};
    }
}

module.exports = AuthService;