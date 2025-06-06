const mongoose = require('mongoose');

const engineerSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  name: String,
  department: String,
  profile: String,
  description: String,
  experience: String,
  tools: [String],
  pastProjects: [
    {
      name: String,
      desc: String,
    },
  ],
});

module.exports = mongoose.model('Engineer', engineerSchema);
