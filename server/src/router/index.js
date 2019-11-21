import { Router } from 'express';

import user from './user';
import account from './account';

export default () => {
  const api = Router();

  api.use(user);
  api.use(account);

  return api;
};
