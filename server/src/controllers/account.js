import getConnection from '../db';
import account from '../models/account';

async function Login (req, res, next) {
  const data = req.body;
  console.log(data);
  const connection = await getConnection();
  try {
    const user = await connection.query(account.Login(data));
    req.user = user;
    // res(user);
  } catch (error) {
    throw new Error(error);
  } finally {
    next();
    connection.end();
  }
}

export default { Login };
