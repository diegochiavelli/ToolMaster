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

    static async umEmprestimoEquipamento(req, res) {
        const { id } = req.params;
        try {
            const umEmpEqui = req.params = await database.EmpEquipamentos.findOne({ where: { id: Number(id) } });

            return res.status(200).json(umEmpEqui);
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

    static async criarEmprestimoEquipamento(req, res) {
        const novoEmprestimo = req.body;
        try {
            const novoEmp = await database.EmpEquipamentos.create(novoEmprestimo);
            if(novoEmp){
                try {
                    const umEqui = await database.Equipamentos.findOne({ where: { id: Number(novoEmp.id_equipamento) } });
                    
                    if(umEqui.quantidade < novoEmp.quantidade){
                        return res.status(502).json(error.message);
                    }else{
                        const atualizaQuantidade = Number(umEqui.quantidade) - Number(novoEmp.quantidade);
                        const alteraEquipamento = {'quantidade': atualizaQuantidade};
                        await database.Equipamentos.update(alteraEquipamento, { where: { id: Number(novoEmp.id_equipamento) } });
                    }
                } catch (error) {
                    return res.status(502).json(error.message);
                }
            }
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

    static async concluirEmprestimo(req, res) {
        const { id } = req.params;
        const alteraEmprestimo = req.body;
        try {
            
            const emprestimoVerificaStatus = await database.Emprestimos.findOne({ where: { id: Number(id) } });
           

            if(emprestimoVerificaStatus.status != 'Concluído'){
                await database.Emprestimos.update(alteraEmprestimo, { where: { id: Number(id) } });
                const emprestimoAtualizado = await database.Emprestimos.findOne({ where: { id: Number(id) } });
                const tabelaEmprestimo = await database.EmpEquipamentos.findOne({ where: { id_emprestimo: Number(id) } });
                const umEqui = await database.Equipamentos.findOne({ where: { id: Number(tabelaEmprestimo.id_equipamento) } });
                const atualizaQuantidade = Number(umEqui.quantidade ) + Number(tabelaEmprestimo.quantidade);
                const alteraEquipamento = {'quantidade': atualizaQuantidade};
                await database.Equipamentos.update(alteraEquipamento, { where: { id: Number(tabelaEmprestimo.id_equipamento) } });
                return res.status(200).json(emprestimoAtualizado);
            }
            
            return res.status(200);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async excluiEmprestimo(req, res) {
        const { id } = req.params;
        try {

            await database.EmpEquipamentos.destroy({ where: { id_emprestimo: Number(id) } });
            await database.Emprestimos.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `O empréstimo ${id} foi excluído.` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async todosEmprestimosFuncionario(req, res) {
        const { id } = req.params;
        try {
            const allEmprestimosFuncionario = await database.Emprestimos.findAll({ where: { id_funcionario: Number(id) } })
            return res.status(200).json(allEmprestimosFuncionario);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = EmprestimoController;