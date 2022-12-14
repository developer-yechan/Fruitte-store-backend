const Sequelize = require("sequelize");

module.exports = class ProductImage extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        image: {
          type: Sequelize.STRING(200),
          allowNull: false,
          unique: false,
        },
        thumbnail: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "ProductImage",
        tableName: "productImages",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.ProductImage.belongsTo(db.Product);
  }
};
