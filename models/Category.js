var conn = require('../connect');

 var  Category = {
     
    getAll : (cb) => conn.query("SELECT * FROM category " ,cb ),

    create : (data , cb) => conn.query("INSERT INTO category SET ?" , data , cb),

    getById: (id , cb) => conn.query("SELECT * FROM category WHERE id = ? " , [id] , cb),

    update: (data , id , cb) => conn.query("UPDATE category SET ? WHERE id = ? " , [id , data] , cb),

    delete : (id , cb) => conn.query("DELETE FROM category WHERE id = ? " , [id] , cb),
}

module.exports = Category;