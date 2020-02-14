module.exports = app=>{

    const user = require('../controllers/user.controller.js');

    var router = require('express').Router();

    //Adicionar contato
    router.post('/criar',user.create);

    //Pesquisar um contato
    router.get('/procurar',user.findAll);

    //Listar todos os contatos
    router.get('/contatos',user.findAllContacts);


    //Deletar um contato
    router.delete('/excluir/:id',user.delete);


    app.use('/api/',router);
}