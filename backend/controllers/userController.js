import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// @desc    Auth User and set token
// route    POST /api/users/auth
// access   public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Auth User' });
});

// @desc    Register a new user
// route    POST /api/users
// access   public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already registered');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  console.log(user.password);
  if (user) {
    res.status(201).json({ _id: user._id, name: user.name, email: user.email });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Logout user
// route    POST /api/users/logout
// access   private
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Logout User' });
});

// @desc    Get user profile
// route    GET /api/users/profile
// access   private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'User Profile' });
});

// @desc    Update user profile
// route    PUT /api/users/profile
// access   private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Update User Profile' });
});

// @desc    Delete user profile
// route    POST /api/users/profile
// access   private
const deleteUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Delete User' });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  deleteUser,
};
