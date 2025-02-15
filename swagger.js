const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "EventAide API",
      version: "1.0.0",
      description: "API documentation for EventAide application",
    },
    servers: [{ url: "http://localhost:5000" }],
  },
  apis: ["./server.js"], // Reference your API file
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = { swaggerUi, swaggerSpec };
