// models/Assignment.js

const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  engineerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Engineer',
    required: true,
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Assignment', assignmentSchema);
