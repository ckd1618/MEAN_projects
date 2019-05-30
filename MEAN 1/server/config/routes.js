var restaurants = require('../controllers/restaurants.js');
var path = require('path');
module.exports = function(app){
    app.get('/api/restaurants', restaurants.index);
    // app.get('/api/restaurants/new', restaurants.new);
    app.get('/api/restaurants/:id', restaurants.num);
    app.get('/api/restaurants/:id/edit', restaurants.num);
    // app.get('/api/restaurants/:id/review', restaurants.numreview);
    
    //index-------------
    app.post('/api/restaurants/new', restaurants.newP);
    //num----------------
    app.put('/api/restaurants/:id/edit', restaurants.numeditP);
    app.post('/api/restaurants/:id/review', restaurants.numreviewP);

    //delete:
    app.delete('/api/restaurants/:id/delete', restaurants.numdelete);

    //catchall:
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}
