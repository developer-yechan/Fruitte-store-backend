const Sequelize = require("sequelize");

module.exports = class Payment extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        approved_date: {
          type: Sequelize.DATE, //결제승인시점
        },
        content: {
          type: Sequelize.STRING, //상품명
        },
        method: {
          type: Sequelize.STRING, //카드,계좌이체,가상계좌,카카오페이
        },
        amount: {
          type: Sequelize.INTEGER, //금액
        },
        status: {
          type: Sequelize.STRING, //결제완료,결제대기,결제취소
        },
        tid: {
          type: Sequelize.STRING, //카카오페이에서 필요
          unique: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "Payment",
        tableName: "payments",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Payment.belongsTo(db.Order);
    db.Payment.belongsTo(db.User);
  }
};
