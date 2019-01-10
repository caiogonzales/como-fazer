const express = require('express')
const router = express.Router()

const controller = require('../controllers/categorias')


router.get('/nova', controller.novaCategoria)
// criar nova categoria
router.post('/nova', controller.nova)

// listar categorias
router.get('/', controller.list)
//apagar categorias
router.get('/excluir/:id', controller.deletaCategoria)
//selecionar categoria individualmente
router.get('/editar/:id', controller.select)
//update categoria
router.post('/editar/:id', controller.update)

module.exports = router