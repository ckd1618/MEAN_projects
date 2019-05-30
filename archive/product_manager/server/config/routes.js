var products = require('../controllers/products.js');
var path = require('path');
module.exports = function(app){
    app.post('/api/products', products.create);
    app.get('/api/products', products.index);
    // app.get('/products/:id', products.show);
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}