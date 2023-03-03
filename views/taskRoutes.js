const taskController = require('../controllers/taskController');
const router = require('express').Router();

router.post('/', taskController.createTask)
router.get('/', taskController.getAll)

module.exports = router;