const Sequelize = require("sequelize");

module.exports = class Payment extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.INTEGER, //유저아이디
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
          type: Sequelize.STRING, //결제완료,결제대기,환불완료
        },
        order_id: {
          type: Sequelize.STRING, //주문번호
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
};
