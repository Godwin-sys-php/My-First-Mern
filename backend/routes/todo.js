const express = require('express');
const router = express.Router();

const todoCtrl= require('../controllers/todo');

router.get('/user/:_id', todoCtrl.getAll);
router.get('/:_id', todoCtrl.getOne);

router.post('/', todoCtrl.addOne);

router.put('/:_id', todoCtrl.updateOne);

router.delete('/:_id', todoCtrl.deleteOne);

module.exports= router;