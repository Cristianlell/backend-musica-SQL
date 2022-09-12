'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Track extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Track.belongsTo(models.Storage, {
        as: "track",
        foreignKey: "mediaId",
      });
    }
  }
  Track.init({
    name: DataTypes.STRING,
    album: DataTypes.STRING,
    cover: DataTypes.STRING,
    artist_name: DataTypes.STRING,
    artist_nickname: DataTypes.STRING,
    artist_nationality: DataTypes.STRING,
    duration_start: DataTypes.NUMBER,
    duration_end: DataTypes.NUMBER,
    mediaID: DataTypes.NUMBER
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Track',
  });
  return Track;
};