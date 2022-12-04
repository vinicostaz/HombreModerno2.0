
const express = require('express');
const fs = require('fs');

const app = express();
const filtrosBermuda = require('/filtrosBermuda')

let html = fs.readFileSync('index.html');

app.get('/', (req, res) => {
  res.send(html)
});

app.get('/bermudas', (req, res) => {
  res.end(fs.readFileSync('bermudas.html'));
})

app.use('/bermudas', filtrosBermuda)

app.get('/bermudas', (req, res) => {
  res.end(fs.readFileSync('bermudaPreta.html'));
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
  res.end(fs.readFileSync('produtos.html'));
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