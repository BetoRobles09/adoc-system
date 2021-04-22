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
  fechaInicio: {
    type: Date,
    required: true
  },
  fechaFin: {
    type: Date,
    required: true
  },
  plazo: {
    type: Number
  },
  creador: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Usuario' 
  },
  creado: {
      type: Date,
      default: Date.now()
  }
});

module.exports = Obra = mongoose.model('obra', ObraSchema);