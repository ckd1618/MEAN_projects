var express = require("express"); var path = require("path"); var app = express();
var bodyParser = require('body-parser'); app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static(__dirname + "/views"));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views')); app.set('view engine', 'ejs');
//var session = require('express-session'); app.use(session({secret: 'keyboardkitteh',resave: false,saveUninitialized: true,cookie: { maxAge: 60000 }}))
var server = app.listen(1337); var io = require('socket.io')(server); var counter = 0;

var arr=[];
app.get('/', function(req, res) {

    
    //res.send(req.params.id); -----------use /:id
    res.render("index");
})

io.on('connection', function (socket) {
    console.log('socket working'); //1
    io.emit('update', {all: arr});
    socket.on('userinfo', function(data){
        console.log('backend, msg came in: ' + data.name + ' : ' + data.msg) //2
        arr.push(data);
        console.log(arr);
        io.emit('update', {all: arr});
    })
    // socket.on('clearhistory', function(data){
    //     arr=[];
    //     io.emit('update', {all: arr});
    // })
    
    const _id = socket.id
    socket.on('disconnect', function() {
        console.log(_id + ' left the socket world');
        io.emit('userLeft', {message: _id + ' left the room'});
    })
    
})

// app.post('/result', function(req, res) {
//     //res.send(req.params.id); -----------use /:id
//     context = {
//     name: req.body.name,
//     location: req.body.location,
//     language: req.body.language,
//     comment: req.body.comment,
//     }
//     res.render('result', context);
// })



// app.listen(8000, function() {
//     console.log("listening on port 8000");
// });