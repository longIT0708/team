const conn = require('../connect')

module.exports = (app) => {

    app.get('/login' , function(req, res) {
        res.render('login/index');
    })

    app.post('/login' , function(req, res) {
        let sql = 'SELECT id , name , email  From user Where email = ? and password = ?'
        conn.query(sql, [req.body.email , req.boy.password] , function(err,data) {

                let login = data[0];
                req.session.login = login
                res.redirect('/product') 
        }) 
    })
}