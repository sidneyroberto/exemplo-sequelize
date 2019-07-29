const express = require('express');
const contatoCtrl = require('../controllers/contato_controller');

const router = express.Router();

router.get('/', contatoCtrl.recuperarTodos);
router.post('/', contatoCtrl.salvar);
router.put('/', contatoCtrl.atualizar);
router.delete('/:id', contatoCtrl.remover);

module.exports = router;
