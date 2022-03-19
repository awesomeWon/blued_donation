"use strict";
exports.__esModule = true;
exports.pool = void 0;
/* eslint-disable arrow-body-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable import/no-unresolved */
var mysql = require("mysql");
// import * as mysql from "mysql";
var config_1 = require("../config");
var pool = mysql.createPool(config_1.dbConfig);
exports.pool = pool;
