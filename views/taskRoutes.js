const taskController = require('../controllers/taskController');
const isAdmin = require('../middlewares/isAdmin');
const verifyToken = require('../middlewares/verifyToken');
const router = require('express').Router();

router.post('/', verifyToken, taskController.createTask)
router.get('/', verifyToken, isAdmin, taskController.getAll)
router.get('/:id', verifyToken, taskController.getTaskById)

module.exports = router;