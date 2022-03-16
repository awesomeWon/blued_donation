const dbConfig = {
    host: "mysql",
    user: "root",
    password: "tndtlf98",
    database: "blued_donation",
    // waitForConnections: true,
    connectionLimit: 10,
    port: "3306",
};
const awsConfig = {
    keyId: "lXneXjCWC9mEsLqskROY",
    secretAccessKey: "j2NVpupefGBTGCFUXSwLMCSuRbbyEB2Gi9MuuOX4",
    region: "kr-standard",
};
const jwtSecret = "blume1234blume1234";
const accessKey = "lXneXjCWC9mEsLqskROY";
const secretKey = "j2NVpupefGBTGCFUXSwLMCSuRbbyEB2Gi9MuuOX4";
const serviceId = "ncloud sms service id";
const myPhone = "sms calling number";

export { dbConfig, awsConfig, jwtSecret, accessKey, secretKey, serviceId, myPhone };
