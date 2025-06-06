const Engineer = require('../models/Engineer');

// GET all engineers
exports.getAllEngineers = async (req, res) => {
  const engineers = await Engineer.find();
  res.json(engineers);
};
// ✅ GET engineer by username
exports.getEngineerByUsername = async (req, res) => {
  try {
    const engineer = await Engineer.findOne({ username: req.params.username });
    if (!engineer) {
      return res.status(404).json({ error: "Engineer not found" });
    }
    res.json(engineer);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};


// ✅ GET single engineer by ID
exports.getEngineerById = async (req, res) => {
  try {
    const engineer = await Engineer.findById(req.params.id);
    if (!engineer) return res.status(404).json({ error: "Engineer not found" });
    res.json(engineer);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// POST create engineer
exports.createEngineer = async (req, res) => {
  const newEng = new Engineer(req.body);
  await newEng.save();
  res.status(201).json(newEng);
};

// PUT update engineer
exports.updateEngineer = async (req, res) => {
  const updated = await Engineer.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
};

// DELETE engineer
exports.deleteEngineer = async (req, res) => {
  await Engineer.findByIdAndDelete(req.params.id);
  res.json({ message: 'Engineer deleted' });
};
