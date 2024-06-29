const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  societyName: {
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
  flatNumber: {
    type: String,
    required: true
  },
  purpose: {
    type: String,
    required: true
  },
  start_time: {
    type: String,
    required: true
  },
  end_time: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model('Booking', bookingSchema);
