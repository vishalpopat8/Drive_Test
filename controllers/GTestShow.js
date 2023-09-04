const User = require("../models/User");
module.exports = async (req, res) => {
    // Fetch the data
    try {
        const lic_num = await User.findOne({
            licence_number: req.body.licence_number,
        });

        res.render("GTest", { lic_num: lic_num });
    } catch (error) {
        console.log(error);
    }
}