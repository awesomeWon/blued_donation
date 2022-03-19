require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var session = require("express-session");
var pool = require("./util/pool").pool;
var oAuthRouter = require("./routes/oAuth");
var usersRouter = require("./routes/users");
var app = express();
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function () { return console.log("Successfully connected to mongodb"); })["catch"](function (e) { return console.error(e); });
app.use(session({
    httpOnly: true,
    secret: "ras",
    resave: true,
    secure: false,
    saveUninitialized: false,
    cookie: {
        //세션 쿠키 설정 (세션 관리 시 클라이언트에 보내는 쿠키)
        httpOnly: true,
        Secure: true
    }
}));
pool.query("CREATE TABLE user (\n    id INTEGER AUTO_INCREMENT UNIQUE  PRIMARY KEY,\n    provider VARCHAR(100),\n    name VARCHAR(10),\n    state VARCHAR(20),\n    oAuthToken VARCHAR(100),\n    token VARCHAR(100),\n    expires DATE )");
console.log("i am the proof of doing well");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/oAuth", oAuthRouter);
app.use("/api/users", usersRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
app.listen(5000, function () { return console.log("Express server listening on PORT " + 5000); });
