module.exports = app=>{

    const user = require('../controllers/user.controller.js');

    var router = require('express').Router();

    //Adicionar contato
    router.post('/',user.create);

    //Listar todos os contatos
    router.get('/lista',user.findAll);

    app.use('/api/contatos',router);
}