const api = require('../api');
const novaCategoria = async(req, res) => {
    const categorias = await api.list('categorias')
    res.render('publicacoes/nova', {categorias})
}
const nova = async (req, res) => {
    await api.create('publicacoes/'+req.body.categoria,
        { titulo: req.body.titulo, conteudo: req.body.conteudo })
    res.redirect('/publicacoes/categoria/'+req.body.categoria)
}
const list = async (req, res) => {
    const categoria = req.params.categoria
    const publicacoes = await api.list('publicacoes/'+categoria)
    res.render('publicacoes/index', { publicacoes, categoria })
}
const deletaCategoria = async (req, res) => {
    await api.apagar('publicacoes/'+req.params.categoria, req.params.id)
    res.redirect('/publicacoes/categoria/'+req.params.categoria)
}
const select = async (req, res) => {
    const publicacao = await api.get('publicacoes/'+req.params.categoria, req.params.id)
    res.render('publicacoes/editar', {
        publicacao,
        categoria: req.params.categoria
    })
}
const conteudoPost = async(req, res) => {
    const post = await api.get('publicacoes/'+req.params.categoria, req.params.id)
    res.render('publicacoes/post', {
        post,
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    })
}
const update = async (req, res) => {
    await api.update('publicacoes/' + req.params.categoria, req.params.id, {
        titulo: req.body.titulo, conteudo: req.body.conteudo
    });
    res.redirect('/publicacoes/categoria/'+req.params.categoria)
}
module.exports = {
    novaCategoria, nova, list, deletaCategoria, select, update, conteudoPost
}