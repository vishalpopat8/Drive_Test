module.exports = (req, res, next) => {
    if (!req.session.userId || UserType != "Driver") {
        return res.redirect('/')
    }
    next()
};
