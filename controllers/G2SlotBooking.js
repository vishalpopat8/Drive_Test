const User = require("../models/User");
const Appointment = require("../models/Appointment");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
    try {
        if (req.body.select_slot) {
            const dateStr = req.body.app_date;
            const dateParts = dateStr.split("/");

            // JavaScript's Date constructor takes arguments in the order: year, month, day
            const dateObj = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);

            const isoString = dateObj.toISOString();

            const updateAppointment = {
                isTimeSlotAvailable: false
            }
            const appointment_update = await Appointment.findOneAndUpdate({ Date: isoString, Time: req.body.select_slot }, updateAppointment);

            const updatedData = {
                AppointmentID: appointment_update._id,
                TestType: "G2"
            };
            req.session.AppId = appointment_update._id
            const user_update = await User.findByIdAndUpdate(loggedIn, updatedData);
            res.redirect("/");
        }
        else {
            req.toastr.error('Please select Appointment Slot from Availbale dates', 'Error', {
                positionClass: 'custom-toastr'
            });
            req.toastr.clear()

            res.render("G2Test", { keys: keys, req: req });
        }

    } catch (error) {
        console.log("hi error", error);
        res.redirect('/G2Test');
    }
}