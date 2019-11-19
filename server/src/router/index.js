import { Router } from 'express';

import user from './user';

export default () => {
  const api = Router();

  api.use(user);

  return api;
};
