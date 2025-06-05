// routes/assignmentRoutes.js

const express = require('express');
const router = express.Router();
const {
  getAllAssignments,
  createAssignment,
  updateAssignment,
  deleteAssignment,
} = require('../controllers/assignmentController');

// Public routes (add auth if needed)
router.get('/', getAllAssignments);
router.post('/', createAssignment);
router.put('/:id', updateAssignment);
router.delete('/:id', deleteAssignment);

module.exports = router;
