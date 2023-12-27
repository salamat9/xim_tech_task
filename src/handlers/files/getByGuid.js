import { FILE_NOT_FOUND_BY_GUID } from '../../constants/messages.js';
import fileService from '../../services/files/index.js';
import { DataNotFoundError } from '../../utils/errorTypes/index.js';

const getByGuid = async (req, res) => {
  try {          
    const { guid } = req.params;
    const file = await fileService.getByGuid(guid);
  
    if (!file) 
      throw new DataNotFoundError(FILE_NOT_FOUND_BY_GUID(guid));

    res.status(201).json({ file })
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

export default getByGuid;
