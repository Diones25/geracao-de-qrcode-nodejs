import express from 'express';
import qr from 'qr-image'
const app = express();
const port = 3600;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/qrcode', (req, res) => {
    const url = 'https://github.com/Diones25';
    const code = qr.image(url, { type: 'png' })//svg ou png

    res.type('png')
    code.pipe(res);
});

app.listen(port, () => {
    console.log(`Servidor rodando: http://localhost:${port}`)
})