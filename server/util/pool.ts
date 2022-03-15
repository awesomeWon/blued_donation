export {};
/* eslint-disable arrow-body-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable import/no-unresolved */
import * as mysql from "mysql2";
import { dbConfig } from "../config";

interface DBresult {
    status: string;
    data: Array<JSON>;
}
const pool = mysql.createPool(dbConfig).promise();

export { pool, DBresult };
