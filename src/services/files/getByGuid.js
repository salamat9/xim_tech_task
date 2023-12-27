import { Files } from '../../models/index.js';
import { DatabaseError } from '../../utils/errorTypes/index.js';

const getByGuid = async (guid) => {
  try {
    return await Files.findOne({
      where: { guid },
    });
  } catch (err) {
    console.log(err);
    throw new DatabaseError();
  }
}

export default getByGuid;
