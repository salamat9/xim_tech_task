import express from 'express';
import uploadFileMiddleware from '../middlewares/multer.js';
import {
  get,
  getByGuid,
  create,
  updateByGuid,
  downloadByGuid,
  deleteByGuid,
} from '../handlers/files/index.js'

const router = express.Router();

router.get('/list', get);
router.get('/:guid', getByGuid);
router.post('/upload', uploadFileMiddleware.single('file'), create);
router.put('/update/:guid', uploadFileMiddleware.single('file'), updateByGuid);
router.get('/download/:guid', downloadByGuid);
router.delete('/delete/:guid', deleteByGuid);

export default router;
