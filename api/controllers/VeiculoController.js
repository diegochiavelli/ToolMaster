const database = require('../models');

class VeiculoController {
    static async todosVeiculos(req, res) {
        try {
            const allVeiculos = await database.Veiculos.findAll();
            return res.status(200).json(allVeiculos);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async umVeiculo(req, res) {
        const { id } = req.params;
        try {
            const umVei = req.params = await database.Veiculos.findOne({ where: { id: Number(id) } });
            return res.status(201).json(umVei);
        } catch (error) {
            return res.status(500).json(erro.message);
        }
    }

    static async criarVeiculo(req, res) {
        const novoVeiculo = req.body;
        try {
            const novoVei = await database.Veiculos.create(novoVeiculo);
            return res.status(200).json(novoVei);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaVeiculo(req, res) {
        const { id } = req.params;
        const alteraVeiculo = req.body;
        try {
            await database.Veiculos.update(alteraVeiculo, { where: { id: Number(id) } });
            const veiculoAtualizado = await database.Veiculos.findOne({ where: { id: Number(id) } });
            return res.status(200).json(veiculoAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async excluiVeiculo(req, res) {
        const { id } = req.params;
        try {
            await database.Veiculos.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `O veículo ${id} foi excluído.` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = VeiculoController;