import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';
import accountController from '../controllers/account';
import response from '../middleware/response';

const TOKENTIME = 60 * 60 * 24 * 30; // 30 days
const SECRET = 'whenIwasYoungIListenToTheRadio';

let authenticate = expressJwt({ secret: SECRET });

let generateAccessToken = (req, res, next) => {
  if (req.user.length <= 0) {
    req.generateAccessToken = false;
  } else {
    req.token = req.token || {};
    req.token = jwt.sign(
      {
        id: req.user.id,
        username: req.user.username
      },
      SECRET,
      {
        expiresIn: TOKENTIME
      }
    );
    req.generateAccessToken = true;
    console.log(req.token);
  }
  next();
};

let respond = (req, res) => {
  if (req.generateAccessToken) {
    res.status(200).json({
      user: req.user[0].username,
      token: req.token,
      status: 'SUCCESS'
    });
  } else {
    res.status(200).json({
      user: null,
      token: null,
      status: 'FAIL'
    });
  }
};

module.exports = {
  authenticate,
  generateAccessToken,
  respond
};
