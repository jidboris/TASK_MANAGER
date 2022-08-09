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
// This logic updates task assigned to owner 
const changeTask = async (req, res, next,) => {
    const foundTask = await taskModel.findById(req.params.id).exec();
   try{ if (!foundTask) {
        res.status(404).send('task with the given id does not exist')
    }
    else {
        foundTask.Task = req.body.Task,
        foundTask.Completed = req.body.Completed
      //  foundTask.Owner = req.body.Owner
    const changedTask = await foundTask.save();
        console.log(changedTask);
        res.json(changedTask)
    }}
   catch(error){console.log("Error in editing task")}
}
// Logic deletes assigned task
const deleteTask = async (req, res, next,) => {
    try {const findTask = await taskModel.findByIdAndRemove(req.params.id).exec()
       const deletedTask = await findTask
    console.log('deleted Task', deletedTask)
        res.status(200).json(deletedTask)

    if (!findTask) {
        res.status(404).send('task with the given id does not exist')
    }
}
catch(error){console.log("processing error")}}
module.exports = {
    createTask,
    retrieve,
    retrieveOne,
    changeTask,
    deleteTask
}