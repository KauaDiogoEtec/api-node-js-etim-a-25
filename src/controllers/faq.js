const db = require('../dataBase/connection'); 

module.exports = {
    async listarFAQ(request, response) {
        try {

            const sql = `
                SELECT faq_id, usu_id, faq_pergunta, faq_resposta FROM FAQ;
            `;

            const [rows] = await db.query(sql);

            const nRegistros = rows.length;
            if (nRegistros === 0) {
                return response.status(404).json({
                    sucesso: false, 
                    mensagem: 'Nenhum registro encontrado.', 
                    dados: null
                });
            }

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de perguntas do FAQ',
                nRegistros, 
                dados: rows
            });
            
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async adicionarFAQ(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Adicionar pergunta no FAQ', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async editarFAQ(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração de uma pergunta do FAQ', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    },
    async removerFAQ(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de uma pergunta do FAQ', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
};  