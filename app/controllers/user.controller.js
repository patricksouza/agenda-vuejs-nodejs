const db = require('../models');
const User = db.user;
const op = db.Sequelize.Op;


exports.create = (req,res) =>{
    if(!req.body.nome){
        res.status(400).send({
            message: 'Não pode ser vazio'
        });
        return;
    }
    const user = {
        nome:req.body.nome,
        ncelular: req.body.ncelular,
        email: req.body.email,
        status: req.body.status
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
            message:err.message || 'Erro ao pesquisar contato'
        });
    });

};

exports.findAllContacts = (req,res) =>{
    User.findAll({where: { status: true}}).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message:err.message || 'Erro ao listar contatos'
        });
    });
};
exports.findOne = (req,res) =>{
    const id = req.params.id;

    User.findByPk(id).then(data=>{

    }).catch(err=>{
        res.status(500).send({
            message: 'Erro ao buscar contato'
        });
    });
};

exports.update = (req,res) =>{
    const id = req.params.id;

    User.update(req.body,{

    }).then(num=>{
        if(num==1){
            res.send({
                message:'Contato atualizado!'
            });
        }else{
            res.send({
                message:'Contato não encontrado para atualização' 
            });
        }
    }).catch(err=>{
        res.status(500).send({
            message:'Erro ao atualizar contato!'
        });
    });
};

exports.delete = (req,res) =>{
    const id = req.params.id;
    User.destroy({
        where:{id:id}
    }).then(num=>{
        if(num==1){
            res.send({
                message:'Contato deletado com sucesso'
            });
        }
        else{
            res.send({
                message:'Contato não encontrato'
            });
        }
    }).catch(err=>{
        res.status(500).send({
            message: 'Erro ao deletar contato'
        });
    });

};

exports.deleteAll = (req,res) =>{
    User.destroy({
        where: {},
        truncate: false
    }).then(nums=>{
        res.send({message: ''})
    }).catch(err=>{
        res.status(500).send({
           message: err.message || 'Erro ao deletar contatos' 
        });
    });
};

