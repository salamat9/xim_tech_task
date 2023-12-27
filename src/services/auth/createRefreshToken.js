import { RefreshToken } from '../../models/index.js';
import { DatabaseError } from '../../utils/errorTypes/index.js';

const createRefreshToken = async (user, refreshToken) => {
  try {
    await RefreshToken.create({
      userId: user.id,
      token: refreshToken,
    });
  } catch (err) {
    console.log(err);
    throw new DatabaseError();
  }
};

export default createRefreshToken;
