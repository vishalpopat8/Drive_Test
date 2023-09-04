const User = require("../models/User");

module.exports = async (req, res) => {
    const user = await User.find({
        usertype:"Driver",
        licenseOrderIssued: null,
        result: { $ne: null }
    })
    await res.render("result", { user: user });
}