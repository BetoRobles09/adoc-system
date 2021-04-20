const mongoose = require('mongoose');

const ObraSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  cliente: {
    type: String,
    required: true
  },
  ubicacion: {
    type: String,
    required: true
  },
  fecha_inicio: {
    type: Date,
    required: true
  },
  fecha_fin: {
    type: Date,
    required: true
  },
  plazo: {
    type: Number
  },
  creador: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Usuario' 
  }
});

module.exports = Obra = mongoose.model('obra', ObraSchema);