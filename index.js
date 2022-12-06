const express = require('express');
const fs = require('fs');

const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: true}));

let html = fs.readFileSync('index.html');

app.get('/comprar', (req, res) => {
  res.sendFile(__dirname + "/comprar.html");
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.get('/registro', (req, res) => {
  res.sendFile(__dirname + "/registro.html");
});

app.post('/registrado', function(req, res){
  var nome = req.body.nome;
  var sobrenome = req.body.sobrenome;
  var email = req.body.email;
  var senha = req.body.senha;
  console.log(nome);
  console.log(sobrenome);
  console.log(email);
  console.log(senha);
  res.send(req.body.nome + " " + req.body.sobrenome + ', sua conta foi criada com sucesso.');
});
app.post('/contato', function(req, res){
  var nome = req.body.nome;
  var telefone = req.body.telefone;
  var email = req.body.email;
  var mensagem = req.body.mensagem;
  console.log(nome);
  console.log(email);
  console.log(telefone);
  console.log(mensagem);
  res.send(req.body.nome + ", Obrigado por enviar suas informações, logo entraremos em contato.");
});


var login = "usuario";
var password = "1234";

app.post('/login', (req, res) => {
  
  if(req.body.password == password && req.body.login == login) {
    req.login = login;
    res.end(fs.readFileSync('logado.html'));
  } else {
    res.end(fs.readFileSync('login.html'));
  }
});
app.get('/login', (req, res) =>{
  if(req.login) {
    res.end(fs.readFileSync('logado.html'));
  } else {
    res.end(fs.readFileSync('login.html'));
  }
});

app.post('/comprar', (req, res) => {
  var val1 = req.body.val1;
  if(val1 == "Norte"){
    val1 = Number(15);
  }else if(val1 == "Nordeste"){
    val1 = Number(13);
  }else if(val1 == "Centro Oeste"){
    val1 = Number(18);
  }else if(val1 == "Sudeste"){
    val1 = Number(20);
  }else if(val1 == "Sul"){
    val1 = Number(22);
  }
  var val2 = req.body.val2;
  if(val2 == "Bermuda Branco" || "Bermuda Bege" || "Bermuda Preta"){
    val2 = Number(69.99);
  }else if(val2 == "Camisa Azul" || "Camisa Vermelha" || "Camisa Verde"){
    val2 = Number(59.99);
  }else if(val2 == "Calça Marrom" || "Jean Azul" || "Jeans Preta"){
    val2 = Number(89.99);
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

app.get('/frete', (req, res) => {
  res.end(fs.readFileSync('frete.html'));
})

app.get('/QS', (req, res) => {
  res.end(fs.readFileSync('QS.html'));
})

app.get('/index', (req, res) => {
  res.end(fs.readFileSync('index.html'));
})

app.get('/login', (req, res) => {
  res.end(fs.readFileSync('login.html'));
})

app.get('/logado', (req, res) => {
  res.end(fs.readFileSync('logado.html'));
})

app.listen(3000, () => {
  console.log('Servidor iniciado...');
});