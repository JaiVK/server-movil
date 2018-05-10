const mongoose = require ('mongoose');
//esquema de marcador

const MarkerSchema = mongoose.Schema({
    
    url: {type : String , unique : true , "default" : '' , required : true},
    latitud: {type: String , unique : false , default : false , required : true},
    longitud: {type: String , unique : false , default : false , required : true},
    titulo: {type : String , unique : false , "default" : '' , required : true},
    comentario: {type : String , unique : false , "default" : '' , required : true}
        
});
    
//exportamos el modulo
module.exports = mongoose.model('Marker', MarkerSchema);