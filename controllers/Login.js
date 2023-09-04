module.exports = async (req, res) => {
    await res.render("Login", { req: req });
}