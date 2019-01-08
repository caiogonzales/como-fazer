const api = require('../api');
const novaCategoria = (req, res) => {
    res.render('categorias/nova')
}
const nova = async (req, res) => {
    await api.create('categorias',
        { categoria: req.body.categoria })
    res.redirect('/categorias')
}
const list = async (req, res) => {
    const categorias = await api.list('categorias')
    res.render('categorias/index', { categorias })
}
const deletaCategoria = async (req, res) => {
    await api.apagar('categorias', req.params.id)
    res.redirect('/categorias')
}
const select = async (req, res) => {
    const categoria = await api.get('categorias', req.params.id)
    res.render('categorias/editar', {
        categoria
    })
}
const update = async (req, res) => {
    await api.update('categorias', req.params.id, {
        categoria: req.body.categoria
    });
    res.redirect('/categorias')
}
module.exports = {
    novaCategoria, nova, list, deletaCategoria, select, update
}