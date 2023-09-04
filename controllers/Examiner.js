const User = require("../models/User");
module.exports = async (req, res) => {
    const user = await User.find({
        usertype: 'Driver', TestType: { $ne: 'default' }, comment: 'default',
        result: null
    })
    res.render("Examiner", { user: user });
}