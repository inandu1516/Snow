//https://www.youtube.com/watch?v=qrIvv6OTN2Y

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

Producte = require('./models/producte');
// Usuari = require('./models/usuari');

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
//
// app.get('/users', function(req, res){
//     console.log("app.get('/books/users");
//     User.getUsers(function(err, users){
//         if(err){
//             throw err;
//         }
//         res.json(users);
//     });
// });
//
// app.post('/registerUser', function(req, res){
//     console.log("app.get('/registerUser");
//     var user = req.body;
//     // console.log(user.name);
//     // console.log(user.password);
//     // console.log(user.email);
//     User.registerUser(user, function(err, user){
//         if(err){
//             throw err;
//         }
//         res.json(user);
//     });
// });
//
// app.get('/login/:name', function(req, res){
//     var userName = req.params.name;
//     var userPassword = req.params.password;
//     console.log("app.get'/login/:name' --> name : " + userName);
//     console.log("app.get'/login/:name' --> password : " + userPassword);
//     User.getUser(req.params.name, function(err, user){
//         if(err){
//             throw err;
//         }
//         res.json(user);
//     });
// });
//
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


app.listen(3000);
console.log('Running on port 3000...');