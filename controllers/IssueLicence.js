const User = require("../models/User");

module.exports = async (req, res) => {
    // Fetch the data
    try {
        const data = {
            licenseOrderIssued: true
        }
        const result = await User.findByIdAndUpdate(req.params.id, data);
        res.redirect("/")
    } catch (error) {
        console.log(error);
    }
}