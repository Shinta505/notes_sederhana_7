import { DataTypes, Sequelize } from "sequelize";
import dbContext from "../config/Database.js";

const Note = dbContext.define('notes', {
    isi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    label: { 
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
});

export { Note };

(async () => {
    await dbContext.sync();
})();