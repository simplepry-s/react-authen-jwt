import { Router } from 'express';
import response from '../middleware/response';
import accountController from '../controllers/account';
import {
  generateAccessToken,
  respond,
  authenticate
} from '../middleware/authMiddleware';

const router = Router();

const LoggerMiddleware = (req, res, next) => {
  console.log(`Logged  ${req.token}  ${req.method} -- ${new Date()}`);
  next();
};

router.post('/account', accountController.Login, generateAccessToken, respond);
router.get('/account', authenticate, (req, res) => {
  res.send('hi api');
});

export default router;
