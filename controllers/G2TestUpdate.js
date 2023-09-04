// const User = require("../models/User");
// const Appointment = require("../models/Appointment");
// const bcrypt = require("bcrypt");

// module.exports = async (req, res) => {
//     try {
//         if (req.body.select_slot) {
//             const hashedLicenceNumber = await bcrypt.hash(req.body.licence_number, 10)
//             req.body.licence_number = hashedLicenceNumber;
//             const dateStr = req.body.app_date;
//             const dateParts = dateStr.split("/");

//             // JavaScript's Date constructor takes arguments in the order: year, month, day
//             const dateObj = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);

//             const isoString = dateObj.toISOString();

//             const updateAppointment = {
//                 isTimeSlotAvailable: false
//             }
//             const appointment_update = await Appointment.findOneAndUpdate({ Date: isoString, Time: req.body.select_slot }, updateAppointment);
//             console.log(appointment_update)
//             const updatedData = {
//                 firstname: req.body.firstname,
//                 lastname: req.body.lastname,
//                 licence_number: req.body.licence_number,
//                 age: req.body.age,
//                 AppointmentID: appointment_update._id,
//                 car_details: {
//                     make: req.body.make,
//                     model: req.body.model,
//                     year: req.body.year,
//                     plate_number: req.body.plate_number
//                 }
//             };

//             const user_update = await User.findByIdAndUpdate(loggedIn, updatedData);

//             res.redirect("/logout");
//         }
//         else {
//             req.toastr.error('Please select Appointment Slot from Availbale dates', 'Error', {
//                 positionClass: 'custom-toastr'
//             });
//             req.toastr.clear()
//             req.flash('data', req.body)

//             res.render("G2Test", { keys: keys, req: req });
//         }

//     } catch (error) {
//         console.log(error);
//         req.flash('data', req.body)
//         res.redirect('/G2Test');
//     }
// }

const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
    try {
        const hashedLicenceNumber = await bcrypt.hash(req.body.licence_number, 10)
        req.body.licence_number = hashedLicenceNumber;

        const updatedData = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            licence_number: req.body.licence_number,
            age: req.body.age,
            car_details: {
                make: req.body.make,
                model: req.body.model,
                year: req.body.year,
                plate_number: req.body.plate_number
            }
        };
        req.session.LicNum = req.body.licence_number
        const user_update = await User.findByIdAndUpdate(loggedIn, updatedData);

        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
}

