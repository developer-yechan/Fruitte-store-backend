const swaggerUi = require("swagger-ui-express");
const swaggereJsdoc = require("swagger-jsdoc");
const env = process.env;
const PORT = env.PORT;

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Fruitte store swagger API Docs",
      description: "Fruitte store service API 문서",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`, // 요청 URL
      },
    ],
  },
  apis: ["./routes/*.js"], //Swagger 파일 연동
};
const specs = swaggereJsdoc(options);

module.exports = { swaggerUi, specs };
