import express from 'express';
import userRouter from './users.js'
import citiesRouter from './cities.js'
import itinerariesRouter from './itineraries.js';
import authRouter from './auth.js';

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});

router.use('/users',userRouter)
router.use('/cities',citiesRouter)
router.use('/itineraries',itinerariesRouter)
router.use('/auth', authRouter)

export default router;
