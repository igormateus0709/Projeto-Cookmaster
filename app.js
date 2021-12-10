const express = require ('express')
const app = express()
const cors = require ('cors')
const mongoose = require('mongoose')
const users = require('./models/users.model')

const PORT = 5000

mongoose.connect('mongodb://localhost:27017/Cookmaster',{
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexão com o banco de dados realizada com sucesso')
}).catch((err) => {
    console.log(err);
})

app.use(cors());
app.use(express.json());

app.get('/index', (req, res) => {
    return res.status(200).json({
        mensagem: 'Você acessou a rota /index'
    })
})

app.post('/novoUsuario', (req, res) => {
    const dados = req.body;
    //console.log(dados)
    users.create(dados)
})

app.listen(5000, () => {
    console.log('Servidor backend rodando na porta 5000 da máquina local')
})
