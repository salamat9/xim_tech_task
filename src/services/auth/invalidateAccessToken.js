import { TokenBlackList } from "../../models/index.js";
import { DatabaseError } from "../../utils/errorTypes/index.js";

const invalidateAccessToken = async (accessToken) => {
  try {
    return await TokenBlackList.create({
      token: accessToken,
    });
  } catch (err) {
    console.log(err);
    throw new DatabaseError();
  }
};

export default invalidateAccessToken;