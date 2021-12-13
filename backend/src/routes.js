const express = require("express");
const routes = express.Router();
const clienteController = require("./controllers/ClienteController");
const produtoController = require("./controllers/ProdutoController");
const vendaController = require("./controllers/VendaController");
//Rotas de clientes
//buscar clientes por id
routes.get("/cliente/buscar/:id", clienteController.buscar)
//listar clientes
routes.get("/cliente/listar", clienteController.listar)
//cadastro de clientes
routes.post("/cliente/cadastro", clienteController.cadastrar)
//deletar um cliente via id
routes.delete("/cliente/apagar/:id", clienteController.apagar)
//atualizar um cliente
routes.put("/cliente/atualizar/:id", clienteController.atualizar)

//Rotas de produtos
//buscar produto
routes.get("/produto/buscar/:id", produtoController.buscar)
//listar todos os produtos
routes.get("/produto/listar", produtoController.listar)
//cadastrar produto
routes.post("/produto/cadastro", produtoController.cadastrar)
//atualizar produto
routes.put("/produto/atualizar/:id", produtoController.atualizar)
//apagar produto
routes.delete("/produto/apagar/:id", produtoController.apagar)

//rotas de vendas
//cadastrar venda
routes.post("/venda/cadastro", vendaController.cadastrar)
//buscar venda
routes.get("/venda/busca/:id", vendaController.buscar)
//listar vendas
routes.get("/venda/listar", vendaController.listar)
//apagar venda
routes.delete("/venda/apagar/:id", vendaController.apagar)

module.exports = routes;