const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 5000;


// Load .env file
dotenv.config();

// Middleware
app.use(cors({
  origin: "*", // or use your frontend's URL for more security
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ Connected to MongoDB Atlas");
}).catch(err => {
  console.error("❌ MongoDB connection error:", err);
});

// Route imports
const assignmentRoutes = require('./routes/assignmentRoutes');
const engineerRoutes = require('./routes/engineerRoutes');
const projectRoutes = require('./routes/projectRoutes');
const authRoutes = require('./routes/authRoutes'); 

// API Routes
app.use('/api/assignments', assignmentRoutes);
app.use('/api/engineers', engineerRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api', authRoutes); 

// Test route
app.get("/", (req, res) => {
  res.send("✅ Backend is running.");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
