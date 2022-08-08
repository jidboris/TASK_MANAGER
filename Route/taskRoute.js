const express = require("express");
const router = express.Router();
const taskSchema = require("../modules/taskSchema")
const taskController = require("../Controller/task")
//const swaggerDoc = require("../swaggerDoc.js")
// const swaggerUi = require('swagger-ui-express');
// const swaggerJsDoc = require('swagger-jsdoc');

// router.use(express.json());

// const swaggerOptions = {
//     swaggerDefinition: {
//         info: {
//             title: 'Task Manager API',
//             description: 'For Task Management',
//             contact: {
//                 name: 'Olajide'
//             },
//             servers: ['http://localhost:3200']
//         }
//     },
//     apis: ["taskRoute.js"]
// };
// const swaggerDocs = swaggerJsDoc(swaggerOptions);
// router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Route
/**
 * @swagger
 * /tasks:
 *  post:
 *     description: use to add a task 
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *             schema:
 *                $ref: '#./Route/*.js'    
 *     responses:
 *       '200':
 *        description: Task assigned successfully          
 */
router.post('/', taskController.createTask);

router.get('/', taskController.retrieve);

router.get('/:id', taskController.retrieveOne);




// for each user to enter their parcel details
// router.post('/', (req, res) => {
//     const newParcel = new parcelModel(
//         {
//             Item: req.body.Item,
//             attributes: req.body.attributes
//         });

//     newParcel.save()

//     res.json(
//         newParcel
//     )
//     console.log('New parcel', newParcel)
// });
// //This logic extracts all the parcel registered in database.
// router.get('/', async (req, res) => {
//     const Parcels = await parcelModel.find()

//     console.log('Parcels', Parcels)
//     res.json(Parcels)
// });

// //Logic uses the parcel id to get One Parcel detail
// router.get('/:id', async (req, res) => {
//     const Parcel = await parcelModel.findById(req.params.id).exec();
//     if (!Parcel) {
//         res.status(404).send('Parcel with the given id does not exist')
//     }

//     else {
//         res.json(Parcel)
//         console.log('parcel', Parcel)
//     }
// });
// //Logic to get the Item in a particular parcel
// router.get('/parcelItem/:id', async (req, res) => {
//     const Parcel = await parcelModel.findById(req.params.id).exec();
//     if (!Parcel) {
//         res.status(404).send('Parcel with the given id does not exist')
//     }
//     else {
//         Parcel.Item = req.body.Item
//         const PI = Parcel.Item
//         res.json(PI)
//         console.log('parcel', Parcel.Item)
//     }
// });

// // Logic edits the parcel order details
// router.put('/parcelEdit/:id', async (req, res) => {
//     const Parcel = await parcelModel.findById(req.params.id);
//     console.log(Parcel)
//     if (!Parcel) {
//         res.status(404).send('parcel with the given id does not exist')
//     }
//     else {
//         Parcel.Item = req.body.Item
//         Parcel.attributes = req.body.attributes
//         const editParcel = await Parcel.save()
//         console.log(editParcel)
//         res.json(editParcel)
//     }
// });

// // Logic for deleting parcel order 
// router.delete('/parcelDelete/:id', async (req, res) => {
//     const Parcel = await parcelModel.findByIdAndRemove(req.params.id).exec()
//     console.log('Parcel index', Parcel)
//     if (!Parcel) res.status(404).send('parcel with the given id does not exist')
//     const deleteParcel = await Parcel
//     res.send('parcel deleted succesfully')
//     console.log('deleted parcel', deleteParcel)
// });


module.exports = router