const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];

const user = require("./models/user");
const product = require("./models/product");
const productImage = require("./models/productImage");
const order = require("./models/order");
const payment = require("./models/payment");

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.User = user;
db.Product = product;
db.ProductImage = productImage;
db.Order = order;
db.Payment = payment;

user.init(sequelize);
product.init(sequelize);
productImage.init(sequelize);
order.init(sequelize);
payment.init(sequelize);

user.associate(db);
product.associate(db);
productImage.associate(db);
order.associate(db);
payment.associate(db);
module.exports = db;
