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
    type: String,
    required: true
  },
  fecha_fin: {
    type: Date,
    required: true
  },
  plazo: {
    type: Number
  },
  author: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Usuario' 
  },
  conceptos: {
    type : Array , 
    default: []
  }
});

module.exports = Obra = mongoose.model('obra', ObraSchema);