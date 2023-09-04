const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();
const toastr = require('express-toastr');
const flash = require('connect-flash')
const mongoose = require("mongoose");
const expressSession = require("express-session");
const bcrypt = require("bcrypt");
const schedule = require("node-schedule");
require('dotenv').config();
// Models
const User = require("./models/User");
const Appointment = require("./models/Appointment");


// Controller Files
const GTestController = require("./controllers/GTest");
const GSlotBookingController = require("./controllers/GSlotBooking");
const G2TestController = require("./controllers/G2Test");
const G2SlotDataController = require("./controllers/G2SlotData");
const HomeController = require("./controllers/Home");
const LoginController = require("./controllers/Login");
const G2TestUpdateController = require("./controllers/G2TestUpdate");
const G2SlotBookingController = require("./controllers/G2SlotBooking");
const AppointmentController = require("./controllers/Appointment");
const ResultController = require("./controllers/Result");
const IssueLicenceController = require("./controllers/IssueLicence");
const SlotUpdateController = require("./controllers/SlotUpdate");
const SlotDataController = require("./controllers/SlotData");
const GTestUpdateController = require("./controllers/GTestUpdate");
const RegisterController = require("./controllers/Register");
const LoginUserController = require("./controllers/LoginUser");
const LogoutController = require("./controllers/Logout");
const ExaminerController = require("./controllers/Examiner");
const ResultUpdateController = require("./controllers/ResultUpdate");

// Middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());
app.set("view engine", "ejs");

// Custom Middleware files
const authMiddleware = require("./middlewares/authMiddleware");
const redirectIfAuthenticatedMiddleware = require("./middlewares/redirectIfAuthenticated");
const AppointmentAuthMiddleware = require("./middlewares/AppointmentAuthMiddleware");
const ExaminerAuthMiddleware = require("./middlewares/ExaminerAuthMiddleware");

app.use(
    expressSession({
        secret: "mern",
        saveUninitialized: true,
        resave: true
    })
);

app.use(flash());
app.use(toastr());
// for navbar controls
global.loggedIn = null;
global.UserType = null;
global.LicNum = null;
global.AppId = null;

app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    UserType = req.session.userType;
    LicNum = req.session.LicNum;
    AppId = req.session.AppId;
    next();
});

app.listen(1234, () => {
    console.log("App is listening on port 1234");
});

// database connection
mongoose.connect(
    process.env.MONGODB_URI
);

// Route 1
app.get("/GTest", authMiddleware, GTestController);
app.post("/gslotbooking", authMiddleware, GSlotBookingController);

// Route 2
app.get("/G2Test", authMiddleware, G2TestController);
app.get("/g2slotdata", authMiddleware, G2SlotDataController);
app.post("/g2slotbooking", authMiddleware, G2SlotBookingController);

// Route 3
app.get("/", HomeController);

// Route 4
app.get("/Login", redirectIfAuthenticatedMiddleware, LoginController);

// Route 5
app.post("/g2test/update", authMiddleware, G2TestUpdateController);

// Route 6
app.get("/appointment", AppointmentAuthMiddleware, AppointmentController);
app.get("/result", AppointmentAuthMiddleware, ResultController);
app.post("/issuelicence/:id", AppointmentAuthMiddleware, IssueLicenceController);

app.post("/slot-update", AppointmentAuthMiddleware, SlotUpdateController);
app.get("/getslotdata", AppointmentAuthMiddleware, SlotDataController);

// Route 7
app.post("/gupdate/:id", authMiddleware, GTestUpdateController);

// Route 8
app.post("/auth/store", redirectIfAuthenticatedMiddleware, RegisterController);

// Route 9
app.post("/auth/login", redirectIfAuthenticatedMiddleware, LoginUserController);

// Route 10
app.get("/logout", LogoutController);

// Route 11
app.get("/Examiner", ExaminerAuthMiddleware, ExaminerController);
app.post("/result/:id", ResultUpdateController);

app.use((req, res) => res.render('notFound'))
