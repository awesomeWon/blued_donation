import dotenv from "dotenv";
dotenv.config();

module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: process.env.DB_Dialect,
        define: {
            freezeTableName: true, // sequelize는 복수형으로 table을 만드는데 그것을 방지한다.
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    },
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: process.env.DB_Dialect,
        define: {
            freezeTableName: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: process.env.DB_Dialect,
        define: {
            freezeTableName: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    },
};

// module.exports = {
//     development: {
//         username: "root",
//         password: null,
//         database: "database_development",
//         host: "127.0.0.1",
//         dialect: "mysql",
//     },
//     test: {
//         username: "root",
//         password: null,
//         database: "database_test",
//         host: "127.0.0.1",
//         dialect: "mysql",
//     },
//     production: {
//         username: "root",
//         password: null,
//         database: "database_production",
//         host: "127.0.0.1",
//         dialect: "mysql",
//     },
// };
