const express = require('express');
const router = express.Router();
const obraController = require('../controllers/obraController');
//const auth = require('../middleware/auth');
const { check } = require('express-validator');

// Crea proyectos
// api/proyectos
router.post('/',
    [
        check('nombre', 'El nombre de la obra es obligatorio').not().isEmpty(),
        check('cliente', 'El nombre del cliente es obligatorio').not().isEmpty(),
    ],
    obraController.crearObra
);

// Obtener todos los proyectos
/* router.get('/', 
    auth,
    proyectoController.obtenerProyectos
)

// Actualizar proyecto via ID
router.put('/:id', 
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatoio').not().isEmpty()
    ],
    proyectoController.actualizarProyecto
);

// Eliminar un Proyecto
router.delete('/:id', 
    auth,
    proyectoController.eliminarProyecto
);
*/
module.exports = router;