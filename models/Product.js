const conn = require('../connect')
var Product = {

   

    getAll: (cb) => conn.query("SELECT p.* , c.name as cat_name FROM product p JOIN category c ON p.category_id = c.id Order By p.id  desc" , cb),

    getCat : (cb) =>conn.query("SELECT * FROM category" , cb),

    create: (data , cb) => conn.query("INSERT INTO product SET ?" , data , cb),
    
    getById : ( id  , cb)  => conn.query("SELECT * FROM product WHERE id = ?  ; select * from category " , [id] , cb ),
    
    delete : (id , cb) => conn.query("DELETE FROM product WHERE id = ?", [id] , cb),
    
    update: (id , data ,  cb) => conn.query("UPDATE product SET ? WHERE id = ?", [id ,data] , cb)

    

}

module.exports = Product;