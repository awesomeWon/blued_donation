"use strict";
// const dbConfig = {
//     host: "mysql",
//     user: "root",
//     password: "tndtlf98",
//     database: "blued_donation",
//     // waitForConnections: true,
//     connectionLimit: 10,
//     port: "3306",
// };
exports.__esModule = true;
exports.myPhone = exports.serviceId = exports.secretKey = exports.accessKey = exports.jwtSecret = exports.awsConfig = exports.dbConfig = void 0;
var dbConfig = {
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
};
exports.dbConfig = dbConfig;
var awsConfig = {
    keyId: "lXneXjCWC9mEsLqskROY",
    secretAccessKey: "j2NVpupefGBTGCFUXSwLMCSuRbbyEB2Gi9MuuOX4",
    region: "kr-standard"
};
exports.awsConfig = awsConfig;
var jwtSecret = "blume1234blume1234";
exports.jwtSecret = jwtSecret;
var accessKey = "lXneXjCWC9mEsLqskROY";
exports.accessKey = accessKey;
var secretKey = "j2NVpupefGBTGCFUXSwLMCSuRbbyEB2Gi9MuuOX4";
exports.secretKey = secretKey;
var serviceId = "ncloud sms service id";
exports.serviceId = serviceId;
var myPhone = "sms calling number";
exports.myPhone = myPhone;
