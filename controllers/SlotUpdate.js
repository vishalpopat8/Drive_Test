const Appointment = require("../models/Appointment");
module.exports = async (req, res) => {
    // sending data to database
    const { appointmentdate, ...checkbox } = req.body;
    try {
        if (Object.keys(checkbox).length != 0) {
            for (let key in checkbox) {
                console.log(checkbox[key]);
                Appointment.create({
                    Date: appointmentdate,
                    Time: checkbox[key],
                });
            }
            res.redirect("/");
        } else {
            req.toastr.error("Please check atleast one slot time!", "Error", {
                positionClass: "custom-toastr",
            });
            req.toastr.clear();
            res.render("appointment", { req: req });
        }
    } catch (error) {
        console.log(error);
    }
};
