const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const PORT = 5000;

// Load .env file
dotenv.config();

app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas using .env
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ Connected to MongoDB Atlas");
}).catch(err => {
  console.error("❌ MongoDB connection error:", err);
});

// Dummy login users
const users = [
  { id: "m1", username: "manager1", password: "pass123", role: "Manager" },
  {
    id: "6840a5871c745aa59cbb9f8d", 
    username: "engineer1",
    password: "pass456",
    role: "Engineer"
  }
];

// Routes
const assignmentRoutes = require('./routes/assignmentRoutes');
const engineerRoutes = require('./routes/engineerRoutes');
const projectRoutes = require('./routes/projectRoutes');

app.use('/api/assignments', assignmentRoutes);
app.use('/api/engineers', engineerRoutes);
app.use('/api/projects', projectRoutes);

// Login route
app.post("/api/login", (req, res) => {
  const { username, password, role } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password && u.role === role
  );

  if (user) {
    res.json({ success: true, user });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

app.get("/", (req, res) => {
  res.send("Backend is running.");
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
