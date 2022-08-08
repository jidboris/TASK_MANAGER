const taskModel = require('../modules/taskSchema');
// Logic for creating a task
const createTask = async (req, res, next) => {
        const newTask = await taskModel.create(
            {
                Task: req.body.Task,
                Completed : req.body.Completed,
                Owner: req.body.Owner
            })

        newTask.save();

        res.json(
            newTask
        )
        console.log('New Task', newTask)
    }
// Logic for fetching all created task 
const retrieve = async (req, res, next,) => {
    const tasks = await taskModel.find()
            console.log('Tasks:', tasks);
    res.status(200).json(tasks);
    };
// logic for fetching one task created
const retrieveOne = async (req, res, next,) => {
   const oneTask = await taskModel.findById(req.params.id).exec();
      if (!oneTask) {
         res.status(404).send('task with the given id does not exist')
       }
     else {
          console.log('Task:', oneTask)
         res.status(200).json(oneTask)   
     }
    }
module.exports = {
    createTask,
    retrieve,
    retrieveOne
}