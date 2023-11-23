const database = require('../models');

class SaidaController {
    static async todosSaidas(req, res) {
        try {
            const allSaidas = await database.Saidas.findAll();
            return res.status(200).json(allSaidas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async umSaida(req, res) {
        const { id } = req.params;
        try {
            const umSai = req.params = await database.Saidas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(umSai);
        } catch (error) {
            return res.status(500).json(erro.message);
        }
    }

    static async criarSaida(req, res) {
        const novoSaida = req.body;
        try {
            const umEqui = await database.Equipamentos.findOne({ where: { id: Number(novoSaida.id_equipamento) } });
            if(Number(novoSaida.quantidade) <= Number(umEqui.quantidade)){
                const atualizaQuantidade = Number(umEqui.quantidade) - Number(novoSaida.quantidade);
                const alteraEquipamento = {'quantidade': atualizaQuantidade};
                await database.Equipamentos.update(alteraEquipamento, { where: { id: Number(novoSaida.id_equipamento) } });
                const novoSai = await database.Saidas.create(novoSaida);
                return res.status(201).json(novoSai);
            }else{
                return res.status(502).json(error.message);
            }
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaSaida(req, res) {
        const { id } = req.params;
        const alteraSaida = req.body;
        try {
            await database.Saidas.update(alteraSaida, { where: { id: Number(id) } });
            const saidaAtualizada = await database.Saidas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(saidaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async excluiSaida(req, res) {
        const { id } = req.params;

        try {
            const umSaidaDelete = await database.Saidas.findOne({ where: { id: Number(id) } });

            const umEquiDelete = await database.Equipamentos.findOne({ where: { id: Number(umSaidaDelete.id_equipamento) } });

            const atualizaQuantidadeDelete = Number(umEquiDelete.quantidade) + Number(umSaidaDelete.quantidade);
            
            const alteraEquipamentoDelete = {'quantidade': atualizaQuantidadeDelete};
            
            await database.Equipamentos.update(alteraEquipamentoDelete, { where: { id: Number(umEquiDelete.id) } });

            await database.Saidas.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `A saida ${id} foi excluída.` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = SaidaController;