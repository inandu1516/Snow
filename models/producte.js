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
            type: String,
            required: false
        }
    ]
});

Producte = mongoose.model('Producte', producteSchema);

module.exports = Producte;

// Torna tots productes
module.exports.getProductes = function (callback) {
    Producte.find(callback);
};

// Crea Producte Nou
module.exports.crearProducte = function (producte, callback) {
    Producte.create(producte, callback);
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

