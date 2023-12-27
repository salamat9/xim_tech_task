import { UNATHORIZED } from "../../constants/messages.js";
import { RefreshToken } from "../../models/index.js";
import { 
  DatabaseError,
  UnauthorizedError,
} from '../../utils/errorTypes/index.js';

const deleteRefreshToken = async (refreshToken) => {
  try {
    const token = await RefreshToken.findOne({
      where: { token: refreshToken },
      attributes: ["token"],
    });
    if (token)
      await token.destroy();
    else {
      console.log('gg wp')
      throw new UnauthorizedError(UNATHORIZED);
    }
  } catch (err) {
    if (err)
      throw err;
    throw new DatabaseError();
  }
};

export default deleteRefreshToken;