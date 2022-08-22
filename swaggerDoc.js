const express = require("express");
const router = express.Router();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();
router.use(express.json());


const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Task Manager API',
            description: 'For Task Management',
            contact: {
                name: 'Olajide'
            },
            servers: ['http://localhost:3200']
        }
    },
    apis: ["app.js"]
}
const swaggerDocs = swaggerJsDoc(swaggerOptions);
router.use("/task-doc", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


module.exports = {swaggerOptions, swaggerDocs}