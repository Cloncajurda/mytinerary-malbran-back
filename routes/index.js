import express from 'express';
import userRouter from './users.js'

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});
router.use('./users',userRouter)

export default router;
