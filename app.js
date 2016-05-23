//https://www.youtube.com/watch?v=qrIvv6OTN2Y
/** ============= SESSIONS =============
 * npm install passport --save
 * npm install passport-local --save
 * npm install cookie-parser --save
 * npm install express-session --save
 * https://www.youtube.com/watch?v=sgVL2kw0hSA
 */

var express       =   require('express');
var bodyParser    =   require('body-parser');
var mongoose      =   require('mongoose');

// var sessions = require('client-sessions');
// var session       =   require('express-session');
var app           =   express();
// var passport        = require('passport');
// var LocalStrategy   = require('passport-local').Strategy;
// var cookieParser    = require('cookie-parser');


// app.use(cookieParser());
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(session({secret: 'hq3hfdjwj4rh34jn', saveUninitialized: false, resave: false}));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); 


Producte = require('./models/producte');
Usuari = require('./models/usuari');

// // Connect to Mongoose
mongoose.connect('mongodb://localhost/snowstore');
var db = mongoose.connection;

app.get('/productes', function(req, res){
    Producte.getProductes(function(err, productes){
        if(err){
            throw err;
        }
        res.json(productes);
    });
});

app.post('/registerUser', function(req, res){
    console.log("app.get('/registerUser");
    var user = req.body;
    // console.log(user.name);
    // console.log(user.password);
    // console.log(user.email);
    Usuari.registerUser(user, function(err, user){
        if(err){
            throw err;
        }
        res.json(user);
    });
});

app.get('/producte/detalls/:id', function(req, res){
    Producte.getProducteById(req.params.id, function(err, producte){
        if(err){
            throw err;
        }
        res.json(producte);
    });
});

app.post('/productes', function(req, res){
    var producte = req.body;
    Producte.crearProducte(producte, function(err, producte){
        if(err){
            throw err;
        }
        res.json(producte);
    });
});

app.put('/producte/:_id', function(req, res){
    var id = req.params._id;
    var producte = req.body;
    Producte.editaProducte(id, producte, {}, function(err, producte){
        if(err){
            throw err;
        }
        res.json(producte);
    });
});

app.delete('/producte/:_id', function(req, res){
    var id = req.params._id;
    Producte.borraProducte(id, function(err, producte){
        if(err){
            throw err;
        }
        res.json(producte);
    });
});

app.get('/usuaris', function(req, res){
    console.log("app.get('/usuaris");
    Usuari.getUsuaris(function(err, usuaris){
        if(err){
            throw err;
        }
        res.json(usuaris);
    });
});

app.post('/login', function(req, res){
    var user = req.body;
    // req.session.user = user;
    // console.log('req.session.user: ');
    // console.log(req.session.user);
    // console.log("app.post('/login')");
    // console.log(user);
    Usuari.getUser(user, function(err, usuari){
        if(err){
            throw err;
        }
        res.json(usuari);
    });
});

app.listen(3000);
console.log('Running on port 3000...');