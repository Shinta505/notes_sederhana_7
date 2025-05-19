import { Sequelize } from "sequelize";
import "dotenv/config";

const DB_NAME = notes_shinta;
const DB_USERNAME = root;
const DB_PASSWORD = 
const DB_HOST = "34.132.1.143";

const db = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

export default db;
