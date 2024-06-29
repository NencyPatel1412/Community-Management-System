const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  societyName: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  flatNumber: {
    type: String,
    required: false
  },
  car_number: {
    type: String,
    required: true
  },
  parkingNumber:{
    type: String,
    required: true
  },
 
});

module.exports = mongoose.model('Car', carSchema);
