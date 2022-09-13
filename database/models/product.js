const Sequelize = require("sequelize");

module.exports = class Product extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: false,
        },
        price: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        content: {
          type: Sequelize.STRING(200),
          allowNull: false,
          unique: false,
        },
        origin: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        producer: {
          type: Sequelize.STRING(25),
          allowNull: false,
        },
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        deliveryPrice: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        deliveryOption: {
          type: Sequelize.STRING(50),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "Product",
        tableName: "products",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Product.hasMany(db.Order);
    db.Product.hasMany(db.ProductImage);
  }
};
