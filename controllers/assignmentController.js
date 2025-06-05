// controllers/assignmentController.js

const Assignment = require('../models/Assignment');

// GET all assignments
exports.getAllAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find().populate('engineerId').populate('projectId');
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch assignments' });
  }
};

// POST create assignment
// POST create assignment with populated data
exports.createAssignment = async (req, res) => {
  try {
    const assignment = new Assignment(req.body);
    await assignment.save();

    const populated = await Assignment.findById(assignment._id)
      .populate('engineerId')
      .populate('projectId');

    res.status(201).json(populated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT update assignment
exports.updateAssignment = async (req, res) => {
  try {
    await Assignment.findByIdAndUpdate(req.params.id, req.body);
    const updated = await Assignment.findById(req.params.id)
      .populate('engineerId')
      .populate('projectId');

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE assignment
exports.deleteAssignment = async (req, res) => {
  try {
    await Assignment.findByIdAndDelete(req.params.id);
    res.json({ message: 'Assignment deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete assignment' });
  }
};
