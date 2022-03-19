require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const session = require("express-session");
const { pool } = require("./util/pool");
var oAuthRouter = require("./routes/oAuth");
var usersRouter = require("./routes/users");

var app = express();

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Successfully connected to mongodb"))
    .catch((e: any) => console.error(e));

app.use(
    session({
        httpOnly: true,
        secret: "ras",
        resave: true,
        secure: false,
        saveUninitialized: false,
        cookie: {
            //세션 쿠키 설정 (세션 관리 시 클라이언트에 보내는 쿠키)
            httpOnly: true,
            Secure: true,
        },
    })
);

pool.query(
    `CREATE TABLE user (
    id INTEGER AUTO_INCREMENT UNIQUE  PRIMARY KEY,
    provider VARCHAR(100),
    name VARCHAR(10),
    state VARCHAR(20),
    oAuthToken VARCHAR(100),
    token VARCHAR(100),
    expires DATE )`
);

console.log("i am the proof of doing well");
console.log(process.env.MYSQL_USER);
pool.query(`SHOW DATABASES`, (err, results, fields) => {
    if (err) console.log(err);
    if (results) console.log(results);
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/oAuth", oAuthRouter);
app.use("/api/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req: any, res: any, next: any) {
    next(createError(404));
});

// error handler
app.use(function (err: any, req: any, res: any, next: any) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

app.listen(5000, () => console.log("Express server listening on PORT " + 5000));
