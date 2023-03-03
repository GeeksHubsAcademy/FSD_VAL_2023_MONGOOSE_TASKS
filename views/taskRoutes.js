const taskController = require('../controllers/taskController');
const router = require('express').Router();

router.post('/', taskController.createTask)

module.exports = router;