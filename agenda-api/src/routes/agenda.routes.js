
const express = require('express');
const AgendaController = require('../controllers/AgendaController');
const authMiddleware = require('../middleware/auth');

const routes = express.Router();

routes.use(authMiddleware); 

routes.get('/', AgendaController.index);  
routes.post('/', AgendaController.create);  
routes.put('/:id', AgendaController.update);  
routes.delete('/:id', AgendaController.delete);  

module.exports = routes;
