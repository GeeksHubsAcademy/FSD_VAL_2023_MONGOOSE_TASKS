const router = require('express').Router();
const authRoutes = require('./views/authRoutes');
const taskRoutes = require('./views/taskRoutes');

router.use('/auth', authRoutes);
router.use('/tasks', taskRoutes)

module.exports = router;