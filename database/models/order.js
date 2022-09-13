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
        userId: {
          type: Sequelize.UUID,
          allowNull: false,
        },
        productId: {
          type: Sequelize.UUID,
          allowNull: false,
        },
        address: {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: false,
        },
        content: {
          type: Sequelize.STRING(200),
          allowNull: false,
          unique: false,
        },
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 1,
        },
        status: {
          type: Sequelize.STRING(25),
          allowNull: false,
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
  }
};
