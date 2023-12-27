import express from 'express';
import { getLatency } from '../handlers/latency/index.js';

const router = express.Router();

router.get('', getLatency);

export default router;
