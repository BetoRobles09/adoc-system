const express = require('express');
const router = express.Router();
const obraController = require('../controllers/obraController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

// Crea obras
// api/obras
router.post('/',
	auth,
		[
      check('nombre', 'El nombre de la obra es obligatorio').not().isEmpty(),
      check('cliente', 'El cliente es obligatorio').not().isEmpty(),
      check('ubicacion', 'La ubicación es obligatoria').not().isEmpty(),
      check('fecha_inicio', 'La fecha de inicio es obligatoria').not().isEmpty(),
      check('fecha_fin', 'La fecha de fin es obligatoria').not().isEmpty()
    ],
  obraController.crearObra
);
// Obtener todos las obras
router.get('/', 
  auth,
  obraController.obtenerObras
)
// Actualizar obra via ID
router.put('/:id', 
  auth,
		[
      check('nombre', 'El nombre de la obra es obligatorio').not().isEmpty(),
      check('cliente', 'El cliente es obligatorio').not().isEmpty(),
      check('ubicacion', 'La ubicación es obligatoria').not().isEmpty(),
      check('fecha_inicio', 'La fecha de inicio es obligatoria').not().isEmpty(),
      check('fecha_fin', 'La fecha de fin es obligatoria').not().isEmpty()
    ],
  obraController.actualizarObra
);
// Eliminar una obra
router.delete('/:id', 
  auth,
  obraController.eliminarObra
);

module.exports = router;
