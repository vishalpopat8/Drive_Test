const User = require("../models/User");

module.exports = async (req, res) => {
    // Fetch the data
    try {
        const data = {
            comment: req.body.comment,
            result: req.body.select_result
        }
        const result = await User.findByIdAndUpdate(req.params.id, data);
        res.redirect("/")
    } catch (error) {
        console.log(error);
    }
}