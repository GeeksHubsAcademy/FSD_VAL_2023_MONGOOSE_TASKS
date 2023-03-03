const Task = require("../models/Task");

const taskController = {};


taskController.createTask = async(req, res) => {
    try {
        const {title, description} = req.body;
        const userId = req.userId

        const newTask = await Task.create(
            {
                title: title,
                description: description,
                user_id: userId
            }
        )

        return res.json({
            success: true,
            message: "Task created",
            data: newTask
        })        
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "something went wrong",
                error: error.message
            }
        )
    }
}

taskController.getAll = async(req, res) => {
    try {
        const tasks = await Task.find().populate("user_id", {password: 0, role_id: 0});

        return res.json(
            {
                success: true,
                message: "Get All Tasks retrieved",
                data: tasks
            }
        )        
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "something went wrong",
                error: error.message
            }
        ) 
    }
}

module.exports = taskController;