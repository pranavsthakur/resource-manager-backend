const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const User = require('./models/User');

dotenv.config();

const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    const users = [
      {
        username: 'manager1',
        password: await bcrypt.hash('pass123', 10),
        role: 'Manager'
      },
      {
        username: 'engineer1',
        password: await bcrypt.hash('pass456', 10),
        role: 'Engineer'
      }
    ];

    await User.deleteMany();
    await User.insertMany(users);
    console.log('✅ Users seeded successfully');
    process.exit();
  } catch (err) {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  }
};

seedUsers();
