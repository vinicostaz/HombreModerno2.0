const express = require('express');
const fs = require('fs');

const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: true}));

let html = fs.readFileSync('index.html');
app.get('/comprar', (req, res) => {
  res.sendFile(__dirname + "/comprar.html");
});
app.post('/comprar', (req, res) => {
  const val1 = Number(req.body.val1);
  if(val1 == "Norte"){
    val1 = 15;
  }else if(val1 == "Nordeste"){
    val1 = 13;
  }else if(val1 == "Centro Oeste"){
    val1 = 18;
  }else if(val1 == "Sudeste"){
    val1 = 20;
  }else if(val1 == "Sul"){
    val1 = 22;
  }
  const val2 = Number(req.body.val2);
  if(val2 == "Bermuda Branco" || "Bermuda Bege" || "Bermuda Preta"){
    val2 = 69,99;
  }else if(val2 == "Camisa Azul" || "Camisa Vermelha" || "Camisa Verde"){
    val2 = 59,99;
  }else if(val2 == "Calça Marrom" || "Jean Azul" || "Jeans Preta"){
    val2 = 89,99;
  }
  const soma = val1 + val2;
  res.send("O seu valor de compra final é: " + soma);
});  
app.get('/', (req, res) => {
  res.send(html)
});

app.get('/bermudas', (req, res) => {
  res.end(fs.readFileSync('bermudas.html'));
})

app.get('/ajuda', (req, res) => {
  res.end(fs.readFileSync('ajuda.html'));
})

app.get('/calcas', (req, res) => {
  res.end(fs.readFileSync('calcas.html'));
})

app.get('/camisetas', (req, res) => {
  res.end(fs.readFileSync('camisetas.html'));
})

app.get('/produtos', (req, res) => {
  res.end(fs.readFileSync('produtos.js'));
})

app.get('/QS', (req, res) => {
  res.end(fs.readFileSync('QS.html'));
})


app.get('/index', (req, res) => {
  res.end(fs.readFileSync('index.html'));
})
app.listen(3000, () => {
  console.log('Servidor iniciado...');
});