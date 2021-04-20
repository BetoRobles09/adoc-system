const Obra = require('../models/Obra');
const { validationResult } = require('express-validator');

exports.crearObra = async (req, res) => {
	// Revisar si hay errores
	const errores = validationResult(req);
	if(!errores.isEmpty()) {
		return res.status(400).json({errores: errores.array() })
	}

	try {
		// Crear un nueva obra
		const obra = new Obra(req.body);
		// Guardar el creador via JWT
		obra.creador = req.usuario.id;
		// guardamos la obra
		obra.save();
		res.json(obra);
	} catch (error) {
		console.log(error);
		res.status(500).send('Error en el servidor al crear la obra');
	}
}
// Obtiene todas las obras del usuario actual
exports.obtenerObras = async (req, res) => {
	try {
		const obras = await Obra.find({ creador: req.usuario.id }).sort({ creado: -1 });
		res.json({ obras });
	} catch (error) {
		console.log(error);
		res.status(500).send('Error en el servidor al mostrar las obras');
	}
}

// Actualiza una obra
exports.actualizarObra = async (req, res) => {
	// Revisar si hay errores
	const errores = validationResult(req);
	if( !errores.isEmpty() ) {
		return res.status(400).json({errores: errores.array() })
	}
	// extraer la información de la obra
	const { nombre } = req.body;
	const nuevaObra = {};
	if(nombre) {
		nuevaObra.nombre = nombre;
	}
	try {
		// revisar el ID 
		let obra = await Obra.findById(req.params.id);
		// si la obra existe o no
		if(!obra) {
			return res.status(404).json({msg: 'Obra no encontrada'})
		}
		// verificar el creador de la obra
		if(obra.creador.toString() !== req.usuario.id ) {
			return res.status(401).json({msg: 'No Autorizado'});
		}
		// actualizar
		obra = await Obra.findByIdAndUpdate({ _id: req.params.id }, { $set : nuevaObra}, { new: true });
		res.json({obra});
	} catch (error) {
		console.log(error);
		res.status(500).send('Error en el servidor al actualizar');
	}
}
// Elimina una obra por su id
exports.eliminarObra = async (req, res ) => {
	try {
		// revisar el ID 
		let obra = await Obra.findById(req.params.id);
		// si la obra existe o no
		if(!obra) {
			return res.status(404).json({msg: 'Obra no encontrada'})
		}
		// verificar el creador de la obra
		if(obra.creador.toString() !== req.usuario.id ) {
			return res.status(401).json({msg: 'No Autorizado'});
		}
		// Eliminar obra
		await Obra.findOneAndRemove({ _id : req.params.id });
		res.json({ msg: 'Obra eliminada'})
	} catch (error) {
		console.log(error);
		res.status(500).send('Error en el servidor al eliminar')
	}
}