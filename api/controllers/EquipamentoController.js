const database = require('../models');

class EquipamentoController {
    static async todosEquipamentos(req, res) {
        try {
            const allEquipamentos = await database.Equipamentos.findAll();
            return res.status(200).json(allEquipamentos);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async umEquipamento(req, res) {
        const { id } = req.params;
        try {
            const umEqui = req.params = await database.Equipamentos.findOne({ where: { id: Number(id) } });
            return res.status(200).json(umEqui);
        } catch (error) {
            return res.status(500).json(erro.message);
        }
    }

    static async criarEquipamento(req, res) {
        const novoEquipamento = req.body;
        try {
            const novoEqui = await database.Equipamentos.create(novoEquipamento);
            return res.status(201).json(novoEqui);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaEquipamento(req, res) {
        const { id } = req.params;
        const alteraEquipamento = req.body;
        try {
            await database.Equipamentos.update(alteraEquipamento, { where: { id: Number(id) } });
            const equipamentoAtualizado = await database.Equipamentos.findOne({ where: { id: Number(id) } });
            return res.status(200).json(equipamentoAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async excluiEquipamento(req, res) {
        const { id } = req.params;
        try {
            await database.Equipamentos.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `O equipamento ${id} foi excluído.` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = EquipamentoController;