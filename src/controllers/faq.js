const db = require('../dataBase/connection'); 

module.exports = {
    async listarFAQ(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de perguntas do FAQ', 
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