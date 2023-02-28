const conn = require('../connect')

const product = require('../models/Product')


var ProductController = {

    index : function (req, res) {
        product.getAll(function(err , data){
            res.render('product', {data: data});
        })
    },


    create : function (req, res) {
        product.getCat(function(err, data){
            res.render('product/create' ,{data : data})
        })
      
    },



    store : function(req, res) {
        req.body.image = req.file.filename;
        product.create(req.body , function(err, data){
            res.redirect('/product');
        })
    },

    delete : function(req, res) {
        id = req.params.id;
        product.delete(id, function(err){
            res.redirect('/product')
        })
    },

    edit : function(req, res) {
       var  id = req.params.id;

       product.getById(id , function(err, data) {
        res.render('product/edit', {cats : data[1] , Edit : data[0][0]});
        

       })
    },


    update : function(req, res) {
        id = req.params.id;
       product.update(  req.body , id , function(err, data){
        res.redirect('/product')
       })

    }
}
 
module.exports = ProductController;