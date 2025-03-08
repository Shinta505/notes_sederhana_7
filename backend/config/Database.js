import { Sequelize } from "sequelize";

const dbContext = new Sequelize('notes_shinta', 'root', '', {
    host: '34.132.1.143',
    dialect: 'mysql'
});

export default dbContext;