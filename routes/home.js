const HomeController = require("../controllers/HomeController");
module.exports = function(app) {
    app.get('/' , HomeController.index);
}