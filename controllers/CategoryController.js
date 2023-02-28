
const conn  = require('../connect')
var category = require('../models/Category');

var CategoryController = {

    index : function (req, res, next) {
        category.getAll(function(err , data) {
            res.render('category/index', {data : data})
           
        })
    },

    create: function(req, res, next) {
        res.render('category/create');
    },

    store : function(req, res) {
        category.create( req.body , function(err , data) {
            res.redirect('/category')
        })
    },

    delete : function(req, res) {
      var  id = req.params.id;
        category.delete(id , function(err, data) {
            res.redirect('/category')
        })
    },

    edit : function(req, res) {
        var id = req.params.id;
        category.getById( id , function(err, data) {
                res.render('category/edit' , {Edit : data[0]});
        })
    },

    update : function(req, res) {
        var id = req.params.id;
        category.update(id , req.body , function(err, data) {
            res.redirect('/category');
        })
    }



    

}



module.exports = CategoryController