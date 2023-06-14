const database = require('../models');

class EmprestimoController {
    static async todosEmprestimos(req, res) {
        try {
            const allEmprestimos = await database.Emprestimos.findAll();
            return res.status(200).json(allEmprestimos);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async umEmprestimo(req, res) {
        const { id } = req.params;
        try {
            const umEmp = req.params = await database.Emprestimos.findOne({ where: { id: Number(id) } });
            return res.status(200).json(umEmp);
        } catch (error) {
            return res.status(500).json(erro.message);
        }
    }

    static async criarEmprestimo(req, res) {
        const novoEmprestimo = req.body;
        try {
            const novoEmp = await database.Emprestimos.create(novoEmprestimo);
            return res.status(201).json(novoEmp);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaEmprestimo(req, res) {
        const { id } = req.params;
        const alteraEmprestimo = req.body;
        try {
            await database.Emprestimos.update(alteraEmprestimo, { where: { id: Number(id) } });
            const emprestimoAtualizado = await database.Emprestimos.findOne({ where: { id: Number(id) } });
            return res.status(200).json(emprestimoAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async excluiEmprestimo(req, res) {
        const { id } = req.params;
        try {
            await database.Emprestimos.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `O empréstimo ${id} foi excluído.` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = EmprestimoController;