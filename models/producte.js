//cd "\Program Files\MongoDB\Server\3.2\bin"

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var producteSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    descripcio: {
        type: String,
        required: true
    },
    preu: {
        type: Number,
        required: true
    },
    stock: {
        type: Boolean,
        default: true,
        required: false
    },
    img_url: {
        type: String,
        required: true
    },
    updated: {
        type: Date,
        default: Date.now()
    },
    comentaris: [
        {
            usuari: {
                type: String,
                required: false
            },
            comentari: {
                nom: String,
                required: false
            },
            updated: {
                type: Date,
                default: Date.now()
            }
        }
    ]
});

/**
 *  COMENTARIS ==> push comentari a comentaris
 *  ----------------------------------------------------
 *  User   |     Comentari                |  Data
 *  ----------------------------------------------------
 *  user1       blblbllbbl                  xx/xx/XXXX
 *  user2       xaxaaxaxaxa                 xx/xx/XXXX
 *  ...
 */

Producte = mongoose.model('Producte', producteSchema);

module.exports = Producte;

// Torna tots productes
module.exports.getProductes = function (callback) {
    Producte.find(callback);
};

// Get Producte by Id
module.exports.getProducteById = function (id, callback) {
    Producte.findById(id, callback);
};

// Update Book
module.exports.editaProducte = function(id, producte, options, callback){
    var query = {_id: id};
    var update = {
        nom: producte.nom,
        marca: producte.marca,
        categoria: producte.categoria,
        descripcio: producte.descripcio,
        preu: producte.preu,
        img_url: producte.img_url,
        stock: producte.stock,
        updated: Date.now()
    };
    Producte.findOneAndUpdate(query, update, options, callback);
};

// Crea Producte Nou
module.exports.crearProducte = function (producte, callback) {
    Producte.create(producte, callback);
};

// Borra article
module.exports.borraProducte = function(id, callback){
    var query = {_id: id};
    Producte.remove(query, callback);
};

/**
 db.productes.insert(
 {
     nom: 'Scarpa Freedom SL',
     categoria: 'ski',
     marca: 'SCARPA',
     descripcio: 'La Scarpa Freedom SL es una bota de esquí especialmente diseñada para los fanáticos del freeride o fuera de pista.
                 Considerada como la mejor bota de esquí fuera de pista, se trata de un modelo con las mejores prestaciones de una bota de pista
                 en cuanto a  sujeción y empuje, pero con las ventajas de la  comodidad de una bota de esquí de montaña.',
     preu: 359,
     img_url: 'http://www.verticoutdoor.com/media/catalog/product/cache/2/thumbnail/cbcbef48e5e3bcce7c7ed908f20bc5b4/f/r/freedom.jpg'

 }
 )

 */

