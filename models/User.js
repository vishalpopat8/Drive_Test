const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: { type: String, default: 'default' },
    lastname: { type: String, default: 'default' },
    licence_number: { type: String, default: 'default' },
    age: { type: Number, default: 0 },
    username: { type: String, default: 'demo', unique: true },
    password: { type: String, default: 'demo' },
    usertype: { type: String, default: 'Driver' },
    AppointmentID: { type: String, default: 'default' },
    TestType: { type: String, default: 'default' },
    comment: { type: String, default: 'default' },
    result: { type: Boolean, default: null },
    licenseOrderIssued: { type: Boolean, default: null },
    car_details: {
        make: { type: String, default: 'default' },
        model: { type: String, default: 'default' },
        year: { type: Number, default: 0 },
        plate_number: { type: String, default: 'default' },
    }
});

UserSchema.pre("save", function (next) {
    const user = this;
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash;
        next();
    });
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
