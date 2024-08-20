// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/Users');
// require('dotenv').config();

// // Register a new admin or citizen
// exports.register = async (req, res) => {
//   const { username, password, first_name, last_name, shehia_id, status, role } = req.body;

//   // Set role to 'citizen' if it's empty or undefined
//   const userRole = role ? role : 'citizen';

//   // Allow only 'admin', 'sheha', and 'citizen' roles
//   if (userRole !== 'admin' && userRole !== 'sheha' && userRole !== 'citizen') {
//     return res.status(400).json({ message: 'Invalid role' });
//   }

//   try {
//     let user = await User.findOne({ where: { username } });
//     if (user) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     user = await User.create({
//       username,
//       password: hashedPassword,
//       first_name,
//       last_name,
//       shehia_id,
//       status,
//       role: userRole,
//     });

//     res.json({ message: 'User registered successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // Register a new sheha (only by admin)
// exports.registerSheha = async (req, res) => {
//   const { username, password, first_name, last_name, shehia_id, status } = req.body;
//   const role = 'sheha';

//   // Verify if the requester is an admin
//   if (req.user.role !== 'admin') {
//     return res.status(403).json({ message: 'Permission denied' });
//   }

//   try {
//     // Check if the user already exists
//     let user = await User.findOne({ where: { username } });
//     if (user) {
//       return res.status(400).json({ message: 'Username already exists' });
//     }

//     // Optional: Check for password strength (e.g., minimum length)
//     if (password.length < 6) {
//       return res.status(400).json({ message: 'Password must be at least 6 characters long' });
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     user = await User.create({
//       username,
//       password: hashedPassword,
//       first_name,
//       last_name,
//       shehia_id,
//       status,
//       role,
//     });

//     res.json({ message: 'Sheha registered successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // Login user
// exports.login = async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const user = await User.findOne({ where: { username } });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }
    
//     delete user.password;

//     const payload = {
//       user: {
//         id: user.user_id,
//         role: user.role,
//         shehia_id: shehia_id
//       },
//     };

//     jwt.sign(
//       payload,
//       process.env.JWT_SECRET,
//       { expiresIn: '1h' },
//       (err, token) => {
//         if (err) throw err;
//         res.json({ token: token, user });
//       }
//     );
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // Logout user
// exports.logout = (req, res) => {
//   res.json({ message: 'Logged out successfully' });
// };

// // Middleware for verifying token and setting req.user
// exports.authMiddleware = (req, res, next) => {
//   const authData = req.headers['authorization'];
//   const token = authData.split(' ')[1]; 
//   if (!token) {
//     return res.status(401).json({ message: 'No token, authorization denied' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded.user;
//     req.shehiaId = decoded.shehia_id;
//     console.log(req.shehiaId);
//     next();
//   } catch (err) {
//     res.status(401).json({ message: 'Token is not valid' });
//   }
// };
