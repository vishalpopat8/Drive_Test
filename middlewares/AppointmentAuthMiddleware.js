module.exports = (req, res, next) => {
    if (!req.session.userId || UserType != "Admin") {
        return res.redirect('/')
    }
    next()
};
