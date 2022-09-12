"use strict";
const { Model,Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Storage extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Storage.hasMany(models.Track, {
                as: "media",
                foreignKey: "mediaId",
                onDelete: "cascade",
                onUpdate: "cascade",
            });
        }
    }
    Storage.init(
        {
            url: DataTypes.STRING,
            filename: DataTypes.STRING,
        },
        {
            sequelize,
            paranoid: true,
            modelName: "Storage",
        },
        
    );
    return Storage;
};
