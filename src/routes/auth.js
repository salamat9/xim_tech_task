import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import {
  signIn,
  signUp,
  refreshToken,
  logout,
} from '../handlers/auth/index.js';

const router = express.Router();

router.post('/signin', signIn);
router.post('/signup', signUp);
router.post('/signin/new_token', refreshToken);
router.get('/logout', authMiddleware, logout);

export default router;
