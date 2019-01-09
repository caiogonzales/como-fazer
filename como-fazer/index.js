const express = require ('express');
const app = express();
const bodyParser = require('body-parser')
const categorias = require('./routes/categorias')
const publicacoes = require('./routes/publicacoes')


app.use(bodyParser.urlencoded())
app.set('view engine', 'ejs')

const port = process.env.PORT || 3000

app.get('/', async(request, response) => {
    response.render('index',)
});

app.use('/categorias', categorias)
app.use('/publicacoes', publicacoes)

//rodar servidor
app.listen(port, (err) => {
    if(err){
        console.log('error');
    }else {
        console.log('como-fazer server is running on port..', port);
    }
})