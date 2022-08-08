const express = require("express");

const taskRoute = require("./Route/taskRoute");
const MongoClient = require("mongodb");
const { mongoose } = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const app = express();
const PORT = process.env.PORT || '3200';


app.use(express.json());
app.use('/tasks', taskRoute);




const uri = 'mongodb://localhost:27017/taskMan'
mongoose
.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Database Connected"))
.catch((err) => console.log(err)); 
// const connectDB = async () => {
//     try{
//         await mongoose.connect(uri);
//     }catch(error){
//         console.log(error)
//     }
// } 


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
    apis: ["./Route/*.js"]
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.listen(PORT, () =>
    console.log("listening on port" + " " + PORT)
);