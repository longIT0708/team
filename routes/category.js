var CategoryController = require('../controllers/CategoryController');

module.exports = function(app) {
    app.get('/category' , CategoryController.index);    
    app.get('/category/create' , CategoryController.create);    
    app.get('/category/delete/:id' , CategoryController.delete);    
    app.post('/category/store' , CategoryController.store);    
    app.get('/category/edit/:id' , CategoryController.edit);    
    app.post('/category/update/:id' , CategoryController.update);    
}