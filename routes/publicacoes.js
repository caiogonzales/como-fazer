const express = require('express')
const router = express.Router()

const controller = require('../controllers/publicacoes')


router.get('/nova', controller.novaCategoria)
// criar nova categoria
router.post('/nova', controller.nova)

// listar categorias
router.get('/categoria/:categoria', controller.list)
//apagar categorias
router.get('/excluir/:categoria/:id', controller.deletaCategoria)
//selecionar categoria individualmente
router.get('/editar/:categoria/:id', controller.select)
// conteudo do post
router.get('/post/:categoria/:id', controller.conteudoPost)
//update categoria
router.post('/editar/:categoria/:id', controller.update)

module.exports = router