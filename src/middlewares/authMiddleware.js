import { TokenBlackList } from '../models/index.js';
import authService from '../services/auth/index.js';
import { UnauthorizedError } from '../utils/errorTypes/index.js';
import { UNATHORIZED } from '../constants/messages.js';

const authMiddleware = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    
    if (!authorizationHeader) 
      throw new UnauthorizedError(UNATHORIZED);

    const accessToken = authorizationHeader.split(' ')[1];

    if (!accessToken)
      throw new UnauthorizedError(UNATHORIZED);

    const isBlackListed = await TokenBlackList.findOne({
      where: { token: accessToken },
      attributes: ["token"],
    });

    if (isBlackListed) 
      throw new UnauthorizedError(UNATHORIZED);

    const user = await authService.validateAccessToken(accessToken);
    
    if (!user)
    throw new UnauthorizedError(UNATHORIZED)

    req.user = { ...user, accessToken };
    next();
  } catch (err) {
    next(err);
    res.status(err.status).json({ message: err.message });
  }
}

export default authMiddleware;
