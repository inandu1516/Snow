//cd "\Program Files\MongoDB\Server\3.2\bin"

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var usuariSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    productes : [
                    { 
                        type: ObjectId,     //Sustituirá les ID's amb la info de 'productes'
                        ref: 'Producte',
                        required: false
                    }
                ]
});

Usuari = mongoose.model('Usuari', usuariSchema);

module.exports = Usuari;

// Register a User
module.exports.registerUser = function (user, callback) {
    Usuari.create(user, callback);
};

// Busca tots els usuaris
module.exports.getUsuaris = function (callback) {
    Usuari.find(callback);
};

// Get Unique User By Name
module.exports.getUsuari = function (username, callback) {
    /** http://mongoosejs.com/docs/3.4.x/docs/populate.html
     * populate() sustituirá les ID's dels productes amb la seva informació real del document books
     * */
    Usuari.findOne({username: username}, callback).populate('productes');
};

module.exports.getUser = function (user, callback) {
    Usuari.findOne({username: user.username, password: user.password}, callback).populate('productes');
};

module.exports.compraProducte = function (user, id) {
    console.log("models.compraProducte() --> User: " + user + " | Producte: " + id);

    Usuari.update({username: user},{$push: { productes: id }},{upsert:true},function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Producte comprat correctament!");
        }
    });
};


/**

 db.usuaris.insert(
    {
     "username": "Inge",
     "password": "nolose",
     "email": "inge@mean.es",
     "productes": [
             ObjectId("573d86cd5fdbda2817f9b614"),
             ObjectId("573dec3c5b20d048185b705e"),
             ObjectId("573e05c4ba8359e41b822c9d")
         ]
    }
 )

 db.usuaris.insert(
     {
          "username": "prova",
          "password": "123",
          "email": "prova@mean.es"
     }
 )
 WriteResult({ "nInserted" : 1 })
 
 var result = db.users.findOne({"username":"Inge"},{"productes":1})
 var compras = db.productes.find({"_id":{"$in":result["productes"]}})

 > db.usuaris.update(
     {username:'Linda'},
     { $push: {productes: ObjectId("573d86cd5fdbda2817f9b614") } }
 );


 */
