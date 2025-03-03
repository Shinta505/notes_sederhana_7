import { Sequelize } from "sequelize";

const dbContext = new Sequelize('notes_shinta', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default dbContext;