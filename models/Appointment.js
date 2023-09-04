const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    Date: Date,
    Time: String,
    isTimeSlotAvailable: { type: Boolean, default: true }
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;