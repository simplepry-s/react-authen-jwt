import { Router } from 'express';
import response from '../middleware/response';
import accountController from '../controllers/account';
import {
  generateAccessToken,
  respond,
  authenticate
} from '../middleware/authMiddleware';

const router = Router();

router.post('/account', accountController.Login, generateAccessToken, respond);
router.get('/account', authenticate, (req, res) => {
  res.send('protect api test');
});

export default router;
