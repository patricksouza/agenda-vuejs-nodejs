module.exports = app=>{

    const user = require('../controllers/user.controller.js');

    var router = require('express').Router();

    //Adicionar contato
    router.post('/criar',user.create);

    //Pesquisar um contato
    router.get('/procurar',user.findAll);

    //Listar todos os contatos
    router.get('/contatos',user.findAllContacts);

    //Encontrar um contato
    router.get('/procurar/:id',user.findOne);

    //Deletar um contato
    router.delete('/excluir/:id',user.delete);

    //Deletar todos
    router.delete('/excluirTodos',user.deleteAll);

    //Atualizar um contato
    router.put('/editar/:id',user.update);
    

    app.use('/api/',router);
}