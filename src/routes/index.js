import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import AuthRoutes from './auth.js';
import FileRoutes from './files.js';
import UserRoutes from './users.js';
import LatencyRoutes from './latency.js';

const router = express.Router();

router.use('', AuthRoutes);
router.use('', authMiddleware, UserRoutes);
router.use('/latency', LatencyRoutes);
router.use('/file', authMiddleware, FileRoutes);

export default router;
