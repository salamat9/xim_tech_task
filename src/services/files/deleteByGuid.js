import { Files } from '../../models/index.js';
import { DatabaseError } from '../../utils/errorTypes/index.js';

const deleteByGuid = async (guid) => {
  try {
    return await Files.destroy({
      where: { guid },
    });
  } catch (err) {
    console.log(err);
    throw new DatabaseError();
  }
};

export default deleteByGuid;
