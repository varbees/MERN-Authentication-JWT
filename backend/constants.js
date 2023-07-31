import dotenv from 'dotenv';

dotenv.config();

export const __port__ = process.env.PORT || 8006;
export const __prod__ = process.env.NODE_ENV === 'production';
export const __db__ = process.env.MONGO_URI;
export const __jwtSecret__ = process.env.JWT_SECRET;
