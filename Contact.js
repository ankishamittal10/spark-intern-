const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  college: { type: String, required: true },
  course: { type: String, required: true },
  duration: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contact', contactSchema);
