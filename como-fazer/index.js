const express = require ('express');
const app = express();
const bodyParser = require('body-parser')
const categorias = require('./routes/categorias')


app.use(bodyParser.urlencoded())
app.set('view engine', 'ejs')

const port = process.env.PORT || 3000

app.get('/', async(request, response) => {
    const content = await axios.get('https://como-fazerdevpleno.firebaseio.com/teste.json');
    
    console.log(content.data)
    response.render('index', {i: content.data})
});

app.use('/categorias', categorias)

//rodar servidor
app.listen(port, (err) => {
    if(err){
        console.log('error');
    }else {
        console.log('como-fazer server is running on port..', port);
    }
})