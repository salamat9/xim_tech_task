import { Files } from '../../models/index.js';
import { DatabaseError } from '../../utils/errorTypes/index.js';

const update = async (
  guid, 
  {
    filename,
    destination,
    mimetype,
    size
  }
) => {
  try {
    const path = `${destination}${filename}`;

    return await Files.update(
      {
        name: filename,
        path,
        mimetype,
        size,
      },
      {
        where: { guid }
      }
    );
  } catch (err) {
    console.log(err);
    throw new DatabaseError();
  }
};

export default update;
