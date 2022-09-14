const Sequelize = require("sequelize");

module.exports = class Order extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        address: {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: false,
        },
        recipent: {
          type: Sequelize.STRING(50),
          allowNull: false,
          unique: false,
        },
        recipentCall: {
          type: Sequelize.STRING(25),
          allowNull: false,
          defaultValue: false,
        },
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 1,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "Order",
        tableName: "orders",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Order.hasMany(db.Payment);
    db.Order.belongsTo(db.User);
    db.Order.belongsTo(db.Product);
  }
};
