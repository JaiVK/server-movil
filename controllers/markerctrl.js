const User = require('../models/marker-schema');

//Añadir a la base de datos un nuevo usuario y su save

exports.addMarkerSavedata = (req, res) => {
    
    console.log('Intento de añadir un marcador');
	console.log(req.body.MarkerConf);
    const NewMarker = new Marker();
    Object.assign(NewMarker, req.body);
	Newmarker.MarkerConf = JSON.parse(req.body.MarkerConf);
    NewMarker.save()

        .then(marker => {
            
            console.log('Añadido marcador:');
            console.log(marker);
			res.send(marker);
        })
        .catch(error => {
            
			console.log(error);
            console.log('Fallo al añadir marcador');
			res.send('Fallo al añadir marcador');
        })
	
}
/*
//eliminar de la base de datos un usuario y su save

exports.deleteMarkerSavedata = (req, res) => {
	
	console.log('Intento de eliminar usuario');
    console.log(req.params.id);
	
	User.remove({
		uid: req.params.id
	}, function (err) {
		if (err) return handleError(err);
	});
	console.log('Usuario eliminado uid: ' + req.params.id);
	res.send('Usuario eliminado uid: ' + req.params.id);
}

//Actualizar info de un usuario y su save

exports.updateMarkerSavedata = (req, res) => {
	
	console.log('Intento de actualizar partida');
    console.log(req.body);
	/*const Update = ({
		UserConf: req.body.UserConf,
	});
	User.update({
		Email: req.body.Email
	}, Update, function (err) {
		if (err) return handleError(err);
	});
	console.log('Usuario actualizado');
	res.send('Usuario actualizado')*/
/*	res.send('');
}

exports.updateMarkerUid = (req, res) => {
	
	console.log('Intento de actualizar Uid');
    console.log(req.body);
	
	/*const Update = ({
		UserConf: req.body.UserConf,
	});
	User.update({
		Email: req.body.Email
	}, Update, function (err) {
		if (err) return handleError(err);
	});
	console.log('Usuario actualizado');
	res.send('Usuario actualizado')*/
/*	res.send('');
}
*/
//Recuperar info de un usuario y su save

exports.getMarkerSavedata = (req, res) => {
	
    console.log('Intento de recuperar un marcador');
 	console.log(req.params.id);

	User.find({
		//url: req.params.id  para que salga un unico marcador
	}).lean().exec(function (err, markers) {
		if (err) return console.error(err);
		console.log('Busqueda de marcadores realizada,resultados obtenidos ' + markers.length + ' marcadores');
		res.send('{"markers":' + JSON.stringify(markers) + '}');
	})
}