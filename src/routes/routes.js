const express = require('express'); 
const router = express.Router(); 

const FAQController = require('../controllers/faq'); 

router.get('/faq', FAQController.listarFAQ); 
router.post('/faq', FAQController.adicionarFAQ); 
router.patch('/faq/:id', FAQController.editarFAQ); 
router.delete('/faq/:id', FAQController.removerFAQ); 


module.exports = router;