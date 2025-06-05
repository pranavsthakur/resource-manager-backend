// routes/projectRoutes.js

const express = require('express');
const router = express.Router();
const {
  getAllProjects,
  createProject,
} = require('../controllers/projectController');

// Public routes (you can add auth middleware if needed)
router.get('/', getAllProjects);
router.post('/', createProject);

module.exports = router;
