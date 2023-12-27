import userService from '../../services/user/index.js';
import { USER_NOT_FOUND } from '../../constants/messages.js';
import { DataNotFoundError } from '../../utils/errorTypes/index.js';

const getUser = async (req, res) => {
  try {          
    const { id } = req.user;
    const user = await userService.getById(id);
    
    if (!user) 
      throw new DataNotFoundError(USER_NOT_FOUND);
    
    res.status(201).json({ id: user.id });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

export default getUser;
