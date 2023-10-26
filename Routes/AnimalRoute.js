const express = require('express');
const router = express.Router();

var AnimalController = require('../Controllers/Animal');



router.get('/',AnimalController.getAnimal);
router.post('/post',AnimalController.PostAnimal);
router.get('/Delete/:id',AnimalController.DeleteAnimal);
router.get('/Update/:id',AnimalController.GetByAnimal);
router.post('/update/:id',AnimalController.PutAnimal)


module.exports = router;