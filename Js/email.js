// Servidor Node.js
const express = require('express');
const app = express();
let pageViews = 0; // Contador simples

app.get('/', (req, res) => {
    pageViews++; // Incrementa o contador
    res.send(`Esta página foi visualizada ${pageViews} vezes.`);
    db.collection('soma').add({
        contador: +1
    })
    .then(() => {
        console.log("add" + 1)
    })
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});