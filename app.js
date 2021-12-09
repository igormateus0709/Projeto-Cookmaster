const express = require ('express')
const app = express()
const cors = require ('cors')

const PORT = 5000

app.use(cors());
app.use(express.json());

app.get('/index', (req, res) => {
    return res.status(200).json({
        mensagem: 'Você acessou a rota /index'
    })
})

app.listen(5000, () => {
    console.log('Servidor backend rodando na porta 5000 da máquina local')
})
