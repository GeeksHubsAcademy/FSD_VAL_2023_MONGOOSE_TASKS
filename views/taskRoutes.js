const taskController = require('../controllers/taskController');
const verifyToken = require('../middlewares/verifyToken');
const router = require('express').Router();

router.post('/', verifyToken, taskController.createTask)
router.get('/', verifyToken, taskController.getAll)

module.exports = router;