const database = require('../models');

class EntradaController {
    static async todosEntradas(req, res) {
        try {
            const allEntradas = await database.Entradas.findAll();
            return res.status(200).json(allEntradas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async umEntrada(req, res) {
        const { id } = req.params;
        try {
            const umEntr = req.params = await database.Entradas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(umEntr);
        } catch (error) {
            return res.status(500).json(erro.message);
        }
    }

    static async criarEntrada(req, res) {
        const novoEntrada = req.body;
        try {
            const novoEntra = await database.Entradas.create(novoEntrada);

            const umEqui = await database.Equipamentos.findOne({ where: { id: Number(novoEntra.id_equipamento) } });

            const atualizaQuantidade = Number(umEqui.quantidade) + Number(novoEntra.quantidade);

            const alteraEquipamento = {'quantidade': atualizaQuantidade};

            await database.Equipamentos.update(alteraEquipamento, { where: { id: Number(novoEntra.id_equipamento) } });

            return res.status(201).json(novoEntra);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaEntrada(req, res) {
        const { id } = req.params;
        const alteraEntrada = req.body;
        try {
            await database.Entradas.update(alteraEntrada, { where: { id: Number(id) } });
            const entradaAtualizado = await database.Entradas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(entradaAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async excluiEntrada(req, res) {
        const { id } = req.params;
        try {
            const umEntradaDelete = await database.Entradas.findOne({ where: { id: Number(id) } });

            const umEquiDelete = await database.Equipamentos.findOne({ where: { id: Number(umEntradaDelete.id_equipamento) } });

            if(umEquiDelete.quantidade < umEntradaDelete.quantidade){
                return res.status(502).json(error.message);
            }else{
                const atualizaQuantidadeDelete = Number(umEquiDelete.quantidade) - Number(umEntradaDelete.quantidade);
                const alteraEquipamentoDelete = {'quantidade': atualizaQuantidadeDelete};
                await database.Equipamentos.update(alteraEquipamentoDelete, { where: { id: Number(umEquiDelete.id) } });
            }

            await database.Entradas.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `A entrada ${id} foi excluída.` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = EntradaController;