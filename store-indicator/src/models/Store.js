const moment = require("moment");

module.exports = (sequelize, dataTypes) => {
  const Store = sequelize.define("Store", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    comment: { type: DataTypes.STRING },
    geo: { type: DataTypes.GEOMETRY("POINT") },
    address: { type: DataTypes.TEXT },
  });

  Store.prototype.dataForamt = (data) => moment(data).format("YYYY-MM-DD");

  return Store;
};
