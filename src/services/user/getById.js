import { Logins } from '../../models/index.js';

const getById = async (id) => {
  try {
    return await Logins.findOne({
      where: { id },
      attributes: ["id", "password"],
    });
  } catch (err) {
    console.log('Error:', err)
  }
}

export default getById;
