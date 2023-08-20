import express from 'express';
//import req from 'express/lib/request';
import create from '../controllers/users/create.js'
import read from '../controllers/users/read.js'
import readOne from '../controllers/users/readOne.js';
import update from '../controllers/users/update.js';
import destroy from '../controllers/users/destroy.js';

let router = express.Router();
//router.get('/', function(req, res, next){
//  res.send('respond with a resourse');
//});

// CREATE
router.post('/',create)
//READ
router.get('/', read)
//READ ONE
router.get('/:user_id', readOne)
//UPDATE
router.put('/:u_id', update)
//DESTROY
router.delete('/:id', destroy)

export default router
