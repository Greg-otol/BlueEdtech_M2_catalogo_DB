const Sequelize = require("sequelize");

const connection = new Sequelize(
  process.env.DATABASE_URL,
  // process.env.DB_BASE,
  // process.env.DB_USER,
  // process.env.DB_PASS,
  {
    // host: process.env.DB_HOST,
    // port: 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

module.exports = connection;