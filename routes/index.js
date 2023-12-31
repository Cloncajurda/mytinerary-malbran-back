import express from 'express';
import userRouter from './users.js'
import citiesRouter from './cities.js'

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});

router.use('/users',userRouter)
router.use('/cities',citiesRouter)

export default router;
