import jwt from 'jsonwebtoken';
import { __jwtSecret__, __prod__ } from '../constants.js';

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, __jwtSecret__, {
    expiresIn: '30d',
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: __prod__,
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};

export default generateToken;
