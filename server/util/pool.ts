export {};
/* eslint-disable arrow-body-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable import/no-unresolved */
const mysql = require("mysql");
// import * as mysql from "mysql";
import { dbConfig } from "../config";

interface DBresult {
    status: string;
    data: Array<JSON>;
}
const pool = mysql.createPool(dbConfig);

export { pool, DBresult };
