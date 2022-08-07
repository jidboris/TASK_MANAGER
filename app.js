const express = require("express");
//const { mongoose } = require('mongoose');
//const parcelModel = require("./Modules/parcelModel");
const taskRoute = require("./Route/taskRoute");
const MongoClient = require("mongodb");
const { mongoose } = require('mongoose');
const app = express();
const PORT = process.env.PORT || '3200';

//Below is a middleware to shutout unregistered user trying to access the database
// const validateUser = (req, res, next) => {
//     decodedPayload = jwt.verify(req.headers['x-access-token'], 'secretkey')
//     if (decodedPayload) {
//         req.body.usedId = decodedPayload.id
//         next();
//     }
//     else {
//         res.json({
//             status: 'error',
//             message: 'User not validated'
//         })
//     }
// };

app.use(express.json());
app.use('/tasks', taskRoute);
//To use another route for user, it will be
//app.use('/user', users)



// can also connect here alternatively
//const uri = "mongodb + srv://<jaybris01>:<dududon>@cluster0.o1pzlra.mongodb.net/?retryWrites=true&w=majority";
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
  


app.listen(PORT, () =>
    console.log("listening on port" + " " + PORT)
);