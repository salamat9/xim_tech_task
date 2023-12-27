import jwt from 'jsonwebtoken';
import { InternalError } from '../../utils/errorTypes/index.js';

const generateTokens = async (user) => {
  try {
    const [accessToken, refreshToken] = await Promise.all([
      jwt.sign(
        { id: user.id, password: user.password },
        process.env.JWT_SECRET_KEY,
        { expiresIn: process.env.ACCESS_TOKEN_LIFESPAN },
      ),
      jwt.sign(
        { id: user.id, password: user.password },
        process.env.JWT_REFRESH_KEY,
        { expiresIn: process.env.ACCESS_TOKEN_LIFESPAN },
      ),
    ]);
    
    return {
      accessToken,
      refreshToken,
    };
  } catch (err) {
    console.log(err);
    throw new InternalError();
  }
};

export default generateTokens;
