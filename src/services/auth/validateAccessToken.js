import jwt from 'jsonwebtoken';
import { UnauthorizedError } from '../../utils/errorTypes/index.js';
import { UNATHORIZED } from '../../constants/messages.js';

const validateAccessToken = async (token) => {
  try {
    return await jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (err) {
    console.log(err);
    throw new UnauthorizedError(UNATHORIZED);
  }
};

export default validateAccessToken;
