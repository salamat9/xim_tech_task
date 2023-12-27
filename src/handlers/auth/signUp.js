import { validateEmail, validatePhone } from '../../helpers/validate.js';
import userService from '../../services/user/index.js';
import authService from '../../services/auth/index.js';
import { ValidationError } from '../../utils/errorTypes/index.js';
import { 
  INVALID_ID,
  ID_ALREADY_TAKEN,
  INVALID_PASSWORD,
} from '../../constants/messages.js';

const signUp = async (req, res) => {
  try {
    const { id, password } = req.body;
    const isValidEmail = validateEmail(id);
    const isValidPhone = validatePhone(id);

    if (!password && password.length < 8)
      throw new ValidationError(INVALID_PASSWORD);

    if (!isValidEmail && !isValidPhone)
      throw new ValidationError(INVALID_ID);

    const isTakenId = await userService.getById(id);

    if (isTakenId)
      throw new ValidationError(ID_ALREADY_TAKEN(id));

    const user = await userService.create({ id, password });
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

export default signUp;
