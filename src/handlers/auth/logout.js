import { RefreshToken } from '../../models/index.js';
import authService from '../../services/auth/index.js';

const logout = async (req, res) => {
  try {
    const { id, accessToken } = req.user;
    const token = await RefreshToken.findOne({
      where: { userId: id },
      attributes: ["token"],
    });
    await authService.deleteRefreshToken(token.token);
    const newToken = await authService.invalidateAccessToken(accessToken);

    return res.status(200).json({ expiredToken: newToken.token });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

export default logout;
