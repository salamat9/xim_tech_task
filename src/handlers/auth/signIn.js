import bcrypt from 'bcrypt';
import authService from '../../services/auth/index.js';
import userService from '../../services/user/index.js';
import { 
  AccessDeniedError,
  DataNotFoundError,
} from '../../utils/errorTypes/index.js';
import { 
  USER_NOT_FOUND,
  INCORRECT_CREDENTIALS,
} from '../../constants/messages.js';

const signIn = async (req, res) => {
  try {
    const { id, password } = req.body;
    const user = await userService.getById(id);

    if (!user)
      throw new DataNotFoundError(USER_NOT_FOUND)

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!user || !isValidPassword)
      throw new AccessDeniedError(INCORRECT_CREDENTIALS);
        
    const tokens = await authService.generateTokens(user);
    await authService.createRefreshToken(user, tokens.refreshToken);

    res.status(201).json({
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

export default signIn;
