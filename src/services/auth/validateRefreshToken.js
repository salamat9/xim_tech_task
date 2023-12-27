import jwt from 'jsonwebtoken';
import { UnauthorizedError } from '../../utils/errorTypes/index.js';
import { UNATHORIZED } from '../../constants/messages.js';

const validateRefreshToken = async (refreshToken) => {
  try {
    return await jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY);
  } catch (err) {
    console.log(err);
    throw new UnauthorizedError(UNATHORIZED);
  };
}

export default validateRefreshToken;
