const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  idUser: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: false },
  complete: { type: Boolean, required: true }
});

module.exports = mongoose.model('Todo', todoSchema);