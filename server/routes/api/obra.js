const express = require('express');
const router = express.Router();

const Obra = require('../../models/Obra');

// @route GET api/obras/test
// @description tests obras route
// @access Public
router.get('/test', (req, res) => res.send('Obra route testing!'));

// @route GET api/obras
// @description Get todas las obras
// @access Public
router.get('/', (req, res) => {
  Obra.find()
    .then(obras => res.json(obras))
    .catch(err => res.status(404).json({ notfound: 'No se encontró obras' }));
});

// @route GET api/obras/:id
// @description Get una obra por id
// @access Public
router.get('/:id', (req, res) => {
  Obra.findById(req.params.id)
    .then(obra => res.json(obra))
    .catch(err => res.status(404).json({ notfound: 'No se encontró la obra' }));
});

// @route POST api/obras
// @description agregar obras
// @access Public
router.post('/', (req, res) => {
  Obra.create(req.body)
    .then(obra => res.json({ msg: 'Obra agregada satisfactoriamente' }))
    .catch(err => res.status(400).json({ error: 'No se pudo agregrar el registro' }));
});

// @route PUT api/obras/:id
// @description actualiza obras
// @access Public
router.put('/:id', (req, res) => {
  Obra.findByIdAndUpdate(req.params.id, req.body)
    .then(obra => res.json({ msg: 'Se actualizó satisfactoriamente' }))
    .catch(err =>
      res.status(400).json({ error: 'No se pudo actualizar el registro' })
    );
});

// @route DELETE api/obras/:id
// @description Eliminar obra por id
// @access Public
router.delete('/:id', (req, res) => {
  Obra.findByIdAndRemove(req.params.id, req.body)
    .then(obra => res.json({ mgs: 'Obra eliminada satisfactoriamente' }))
    .catch(err => res.status(404).json({ error: 'No existe el registro' }));
});

module.exports = router;