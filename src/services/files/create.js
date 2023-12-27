import { Files } from '../../models/index.js';
import { DatabaseError } from '../../utils/errorTypes/index.js';

const create = async ({
  filename,
  destination,
  mimetype,
  size
}) => {
  try {
    const path = `${destination}${filename}`;

    return await Files.create({
      name: filename,
      path,
      mimetype,
      size,
    });
  } catch (err) {
    console.log(err);
    throw new DatabaseError();
  }
};

export default create;
