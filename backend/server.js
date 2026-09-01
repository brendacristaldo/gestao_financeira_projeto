const express = require('express');
const cors = require('cors');
const pool = require('./src/config/database');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        mensagem: 'API do sistema de gestão financeira rodando.'
    });
});

app.get('/teste-banco', async (req, res) => {
    try {
        const resultado = await pool.query('SELECT NOW()');

        res.json({
            mensagem: 'Conexão com PostgreSQL funcionando!',
            horario: resultado.rows[0].now
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensagem: 'Erro ao conectar com o PostgreSQL.'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});