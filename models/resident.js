const mongoose = require('mongoose');

const residentSchema = new mongoose.Schema({
  societyName: {
    type: String,
    required: true
  },
  flatNumber: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  complaints: {
    type: [String],
    default: []
  },
  validation: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
});

module.exports = mongoose.model('Resident', residentSchema);
