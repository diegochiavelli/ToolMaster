const { compare } = require('bcryptjs');
const database = require('../models');
const { sign } = require('jsonwebtoken');
const jsonSecret = require('../config/jsonSecret');

class AuthService {
    async login(dto){
        const usuario = await database.Usuarios.findOne({
            attributes: ['id', 'email', 'senha'], where: { email: dto.email}
        });

        if (!usuario){
            throw new Error('Usuário ou senha invalido.')
        }

        const comparaSenha = await compare(dto.senha, usuario.senha);

        if(!comparaSenha){
            throw new Error('Usuário ou senha invalido!');
        }

        const accessToken = sign({
            id: usuario.id,
            email: usuario.email
        }, jsonSecret.secret, {
            expiresIn: 86400
        });

        return { accessToken };
    }
}

module.exports = AuthService;