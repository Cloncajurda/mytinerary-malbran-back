import express from 'express';
import create from '../controllers/cities/create.js'
import read from '../controllers/cities/read.js'
import readOne from '../controllers/cities/readOne.js';
import update from '../controllers/cities/update.js';
import destroy from '../controllers/cities/destroy.js';


let router = express.Router();
//router.get('/', function(req, res, next){
//  res.send('respond with a resourse');
//});

// CREATE
router.post('/', create)
//READ
router.get('/', read)
//READ ONE
router.get('/:user_id', readOne)
//UPDATE
router.put('/:u_id', update)
//DESTROY
router.delete('/:id', destroy)

export default router