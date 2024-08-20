// const { User } = require('../models'); // Make sure the User model is correctly imported

// const getAllUsers = async (req, res) => {
//   try {
//     const { role, shehia_id } = req.user;

//     let users;
    
//     if (role === 'sheha') {
//       // If the user is a sheha, only return users from their shehia
//       users = await User.findAll({
//         where: { shehia_id }
//       });
//     } else if (role === 'admin') {
//       // If the user is an admin, return all users
//       users = await User.findAll();
//     } else {
//       // For citizens or other roles, return an unauthorized error or an empty list
//       return res.status(403).json({ message: 'Unauthorized' });
//     }

//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = {
//   getAllUsers,
//   // Other user-related controller functions...
// };
