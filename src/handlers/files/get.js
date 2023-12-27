import fileService from '../../services/files/index.js';
import { pagination } from '../../helpers/pagination.js';
import { DataNotFoundError } from '../../utils/errorTypes/index.js';
import { FILES_NOT_FOUND } from '../../constants/messages.js';

const get = async (req, res) => {
  try {          
    const { items, page } = pagination(req.query);
    const { rows: files, count } = await fileService.get({items, page})

    if (!files.length)
    throw new DataNotFoundError(FILES_NOT_FOUND);
        
    res.status(200).json({ files, count });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

export default get;
