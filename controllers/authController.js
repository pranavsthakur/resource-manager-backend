const User = require('../models/User');

// Login (simplified for demo)
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    // DIRECT comparison for demo (remove in production)
    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Return mock token and role
    res.json({ token: "demo-token", role: user.role });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
};
