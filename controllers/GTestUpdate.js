const User = require("../models/User");
module.exports = async (req, res) => {
    // updating the data
    try {
        const updatedData = {
            car_details: {
                make: req.body.make,
                model: req.body.model,
                year: req.body.year,
                plate_number: req.body.plate_number
            }
        };
        const user_update = await User.findByIdAndUpdate(req.params.id, updatedData);

        res.redirect("/GTest");
    } catch (error) {
        console.log(error);
    }
}