import dotenv from 'dotenv';

dotenv.config();

export const __port__ = process.env.PORT || 5005;
