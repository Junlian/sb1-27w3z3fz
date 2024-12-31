import { Router } from 'express';
import { paperController } from '../controllers/paper.controller';
import { authenticate } from '../middleware/auth';

const router = Router();

router.post('/search', authenticate, paperController.search);
router.get('/:paperId/analyze', authenticate, paperController.analyze);
router.post('/ask', authenticate, paperController.askQuestion);

export default router;