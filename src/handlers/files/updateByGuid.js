import fs from 'fs/promises'
import fileService from '../../services/files/index.js';
import { 
  FILE_NOT_ADDED,
  FILE_NOT_FOUND_BY_GUID
} from '../../constants/messages.js';
import { 
  BadRequestError,
  DataNotFoundError, 
} from '../../utils/errorTypes/index.js';

const updateByGuid = async (req, res) => {
  try {          
    if (!req.file)
      throw new BadRequestError(FILE_NOT_ADDED); 

    const { guid } = req.params;
    const { filename, destination, mimetype, size } = req.file;
    const file = await fileService.getByGuid(guid);

    if (!file)
      throw new DataNotFoundError(FILE_NOT_FOUND_BY_GUID(guid));
  
    await fs.unlink(file.path);
    await fileService.update(guid, {
      filename,
      destination,
      mimetype,
      size,
    });
    const updatedFile = await fileService.getByGuid(guid);

    res.status(201).json({ file: updatedFile })
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

export default updateByGuid;
