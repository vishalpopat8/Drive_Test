const User = require("../models/User");
const Appointment = require("../models/Appointment");
module.exports = async (req, res) => {
    try {
        const lic_num = await User.findOne({
            licence_number: LicNum,
        });
        const app = await Appointment.find({});
        const groupedData = {};
        app.forEach((entry) => {
            const date = entry.Date.toISOString().split("T")[0];
            if (!groupedData[date]) {
                groupedData[date] = [];
            }
            groupedData[date].push(entry.Time);
        });

        for (const date in groupedData) {
            groupedData[date].sort((a, b) => {
                return a.localeCompare(b, undefined, {
                    numeric: true,
                    sensitivity: "base",
                });
            });
        }

        const keys = Object.keys(groupedData);
        if (lic_num.AppointmentID != "default") {
            const app_details = await Appointment.findById(lic_num.AppointmentID);
            res.render("GTest", { lic_num: lic_num, app_details: app_details, keys: keys, req: req });
        }
        else {
            res.render("GTest", { lic_num: lic_num, keys: keys, req: req });
        }

    } catch (error) {
        console.log(error);
    }
}