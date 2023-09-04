const Appointment = require("../models/Appointment");
module.exports = async (req, res) => {

    const date = new Date(req.query.date);
    const isoString = date.toISOString();
    const app = await Appointment.find({ Date: isoString });
    const timeArray = app.map(item => {
        return {
            Time: item.Time,
            isTimeSlotAvailable: item.isTimeSlotAvailable
        };
    });
    timeArray.sort((a, b) => {
        // Convert time strings to Date objects for proper comparison
        const timeA = new Date(`1970-01-01T${a.Time}`);
        const timeB = new Date(`1970-01-01T${b.Time}`);
        
        return timeA - timeB;
      });
    if (timeArray.length != 0) {
        res.json(timeArray);
    }
    else {
        res.json();
    }

};
