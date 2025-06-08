const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  room: { type: String, required: true },
  roomid: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  userid: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fromdate: { type: Date, required: true },
  todate: { type: Date, required: true },
  totalamount: { type: Number, required: true },
  totaldays: { type: Number, required: true },
  paymentId: { type: String, required: true },
  trysectionid: { type: String, required: true },
  states: { type: String, default: 'booked' }, 
});


const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
