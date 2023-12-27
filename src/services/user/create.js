import bcrypt from 'bcrypt';
import { Logins } from '../../models/index.js';

const create = async ({
    id,
    password,
}) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        return await Logins.create({
            id,
            password: hashedPassword
        })
    } catch (err) {
        console.log('Error:', err)
    }
}

export default create;
