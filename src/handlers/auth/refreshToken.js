import authService from '../../services/auth/index.js';
import userService from '../../services/user/index.js';
import { AccessDeniedError } from '../../utils/errorTypes/index.js';

const refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    const decoded = await authService.validateRefreshToken(refreshToken);
    const user = await userService.getById(decoded.id);
    
    if (!user)
      throw new AccessDeniedError()

    await authService.deleteRefreshToken(refreshToken);
    const tokens = await authService.generateTokens(user);
    await authService.createRefreshToken(user, tokens.refreshToken);

    res.status(201).json({
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    });
  } catch (err) {
    console.log('my err', err)
    res.status(err.status || 401).json({ message: err.message });
  }
};

export default refreshToken;
