module.exports = app=>{

    const users = require('../controllers/user.controller.js');

    var router = require('express').Router();

    //Adicionar contato
    router.post('/',users.create);

    //Listar todos os contatos
    router.get('/',users.findAll);

}