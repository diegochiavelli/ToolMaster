const database = require('../models');

class FuncionarioController {
    static async todosFuncionarios(req, res) {
        try {
            const allFuncionarios = await database.Funcionarios.findAll();
            return res.status(200).json(allFuncionarios);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async umFuncionario(req, res) {
        const { id } = req.params;
        try {
            const umColaborador = req.params = await database.Funcionarios.findOne({ where: { id: Number(id) } });
            return res.status(200).json(umColaborador);
        } catch (error) {
            return res.status(500).json(erro.message);
        }
    }

    static async criarFuncionario(req, res) {
        const novoFuncionario = req.body;
        try {
            const novoColaborador = await database.Funcionarios.create(novoFuncionario);
            return res.status(201).json(novoColaborador);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaFuncionario(req, res) {
        const { id } = req.params;
        const alteraFuncionario = req.body;
        try {
            await database.Funcionarios.update(alteraFuncionario, { where: { id: Number(id) } });
            const funcionarioAtualizado = await database.Funcionarios.findOne({ where: { id: Number(id) } });
            return res.status(200).json(funcionarioAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async excluiFuncionario(req, res) {
        const { id } = req.params;
        try {
            await database.Funcionarios.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `O funcionário ${id} foi excluído.` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = FuncionarioController;