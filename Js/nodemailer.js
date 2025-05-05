const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

// Configuração do transporte de e-mail
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Ou outro provedor de e-mail
    auth: {
        user: 'seuemail@gmail.com', // Seu e-mail
        pass: 'suasenha'            // Sua senha
    }
});

app.get('/send-email', (req, res) => {
    const mailOptions = {
        from: 'joaonovais15@hotmail.com',
        to: 'joaonovais15@hotmail.com',
        subject: 'Link da UBER Clicado',
        text: 'Alguém clicou no link da UBER!'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Erro ao enviar e-mail.');
        } else {
            console.log('E-mail enviado: ' + info.response);
            res.send('E-mail enviado com sucesso!');
        }
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});