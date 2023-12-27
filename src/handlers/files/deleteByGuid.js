import fs from 'fs/promises'
import fileService from '../../services/files/index.js';
import { DataNotFoundError } from '../../utils/errorTypes/index.js';
import { 
  FILE_NOT_FOUND_BY_GUID,
  FILE_DELETED,
} from '../../constants/messages.js';

const deleteByGuid = async (req, res) => {
  try {          
    const { guid } = req.params;
    const file = await fileService.getByGuid(guid);

    if (!file) 
      throw new DataNotFoundError(FILE_NOT_FOUND_BY_GUID(guid));

    await fs.unlink(file.path);
    await fileService.deleteByGuid(guid);

    res.status(204).json({ message: FILE_DELETED(guid) });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

export default deleteByGuid;
