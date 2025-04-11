const express = require('express'); 
const router = express.Router(); 

const FAQController = require('../controllers/faq'); 

router.get('/usuarios', FAQController.listarFAQ); 
router.post('/usuarios', FAQController.adicionarFAQ); 
router.patch('/usuarios', FAQController.editarFAQ); 
router.delete('/usuarios', FAQController.removerFAQ); 


module.exports = router;