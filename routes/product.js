const conn = require('../connect')

var upload = require('../upload')

const ProductController = require('../controllers/ProductController')

module.exports = function (app) {

    app.get('/product' , ProductController.index);

    app.get('/product/create', upload.single('my-file') ,  ProductController.create);

    app.post('/product/store', upload.single('my-file'), ProductController.store);

    app.get('/product/delete/:id', upload.single('my-file'), ProductController.delete);

    app.get('/product/edit/:id' , upload.single('my-file'), ProductController.edit);

    app.post('/product/update/:id', upload.single('my-file'), ProductController.update);
}

