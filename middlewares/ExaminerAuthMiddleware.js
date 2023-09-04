module.exports = (req, res, next) => {
    if (!req.session.userId || UserType != "Examiner") {
        return res.redirect('/')
    }
    next()
};
