const Appointment = require("../models/Appointment");
module.exports = async (req, res) => {

    const date = new Date(req.query.date);
    const isoString = date.toISOString();
    const times = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30"]
    const app = await Appointment.find({ Date: isoString });
    if (app.length >= 0 && app.length < 10) {
        function isTimeAvailableInDatabase(time) {
            return app.some((item) => item.Time === time);
        }
        const notAvailableInDatabase = times.filter((time) => !isTimeAvailableInDatabase(time));
        console.log(notAvailableInDatabase)
        res.json(notAvailableInDatabase);
    }
    else {
        res.json();
    }

};
