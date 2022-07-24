const express = require ("express") ; 
const router = express.Router()
const Post = require("../models/Post");

router.get('/', function(req, res) {
    Post.findAll().then(function(posts){
        res.render('home', {posts: posts})

    })
    
});

router.get('/cad', function(req, res){
    res.render('formulario')
});

router.post('/add', function(req, res){
   Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
   }).then(function(){
    res.redirect('/')
   }).catch(function(erro){
    res.send("Houve um erro" + erro)
   })

});

router.get('/deletar/:id',function(req, res) {
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.send("Postagem deletada com sucesso!")

    }).catch(function(error){
        res.send("Esta postagem não exite!")

    })

});

module.exports = router