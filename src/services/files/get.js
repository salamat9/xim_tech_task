import { Files } from '../../models/index.js';
import { DatabaseError } from '../../utils/errorTypes/index.js';

const get = async ({
  page,
  items,
}) => {
  try {
    return await Files.findAndCountAll({
      limit: items || 10,
      offset: page && items ? page * items : 0,
      order: [["createdAt", "DESC"]]
    });
  } catch (err) {
    console.log(err);
    throw new DatabaseError();
  }
}

export default get;
