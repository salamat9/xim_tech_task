import express from 'express';
import {
  getUser,
} from '../handlers/user/index.js';

const router = express.Router();

router.get('/info', getUser);

export default router;
