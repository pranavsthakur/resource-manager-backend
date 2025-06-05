const express = require('express');
const router = express.Router();

// fake users (for demo only)
const users = [
  { id: 'm1', username: 'manager1', password: 'pass123', role: 'Manager' },
  { id: 'e1', username: 'engineer1', password: 'pass456', role: 'Engineer' }
];

router.post('/login', (req, res) => {
  const { username, password, role } = req.body;

  const user = users.find(u =>
    u.username === username &&
    u.password === password &&
    u.role === role
  );

  if (user) {
    res.json({ success: true, user });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

module.exports = router;
