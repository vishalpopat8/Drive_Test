const User = require("../models/User");
const path = require("path");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
    // sending data to database
    try {
        const { log_username, log_password } = req.body

        const user = await User.findOne({ username: log_username })
        if (user) {
            const same = await bcrypt.compare(log_password, user.password)
            if (same) {
                // user allowed to login (user sessions)
                req.session.userId = user._id
                req.session.userType = user.usertype
                req.session.LicNum = user.licence_number
                req.session.AppId = user.AppointmentID
                res.redirect("/");
            }
            else {
                req.toastr.error('Invalid Password!', 'Error', {
                    positionClass: 'custom-toastr'
                });
                req.toastr.clear()
                res.render("Login", { req: req });

            }
        } else {
            req.toastr.warning('Username not Found! Please Register.','No User', {
                positionClass: 'custom-toastr'
            });
            req.toastr.clear()
            res.render("Login", { req: req });
        }
    } catch (error) {
        console.log(error);
    }
}