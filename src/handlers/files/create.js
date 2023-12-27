import fileService from '../../services/files/index.js';
import { BadRequestError } from '../../utils/errorTypes/index.js';
import { FILE_NOT_ADDED } from '../../constants/messages.js';

const create = async (req, res, next) => {
  try {
    if (!req.file)
      throw new BadRequestError(FILE_NOT_ADDED);
    
    const { filename, destination, mimetype, size } = req.file;
    const file = await fileService.create({
      filename,
      destination,
      mimetype,
      size,
    });
    
    res.status(201).json({ file });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

export default create;
