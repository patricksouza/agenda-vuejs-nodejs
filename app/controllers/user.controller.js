const db = require('../models');
const User = db.user;
const op = db.Sequelize.Op;


exports.create = (req,res) =>{
    if(!req.body.title){
        res.status(400).send({
            message: 'Não pode ser vazio'
        });
        return;
    }
    const user = {
        nome:req.body.nome,
        ncelular: req.body.ncelular,
        email: req.body.email
    }
    User.create(user).then(data => {
      res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message: err.message || 'Erro ao adicionar contato'
        });
    });

};
exports.findAll = (req,res) =>{
    const nome = req.query.nome;
    var condition = nome ? { nome: {[op.like]: '%${nome}$%'}} : null;

    User.findAll({where: condition}).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message:err.message || 'Erro ao listar contatos'
        });
    })

};

exports.findOne = (req,res) =>{

};

exports.update = (req,res) =>{

};

exports.delete = (req,res) =>{

};

exports.deleteAll = (req,res) =>{

};

exports.findAllPublished = (req,res) =>{

};