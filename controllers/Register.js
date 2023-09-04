const User = require("../models/User");
module.exports = async (req, res) => {
    // sending data to database
    const {
        reg_username, reg_password, reg_confirmpassword, usertype,
    } = req.body;
    try {
        const existingUser = await User.findOne({ username: reg_username });
        if (existingUser) {
            req.toastr.warning('Username already exists. Please choose a different username.', '', {
                positionClass: 'custom-toastr'
            });
            req.toastr.clear()
            res.render("Login", { req: req });
            return;
        }
        if (reg_password === reg_confirmpassword) {
            const user = await User.create({
                username: reg_username,
                password: reg_password,
                usertype: usertype
            });
            res.redirect("/login");
        }
        else {
            req.toastr.error('Password Confirmation does not match!', 'Error', {
                positionClass: 'custom-toastr'
            });
            req.toastr.clear()
            res.render("Login", { req: req });
        }
    } catch (error) {
        console.log(error);
    }
}