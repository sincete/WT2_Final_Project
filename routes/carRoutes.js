const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');
const { protect, adminOnly } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.get('/', carController.getAllCars);
router.get('/:id', carController.getCarById);

router.post('/', protect, adminOnly, upload.array('images', 5), carController.createCar);

router.put('/:id', protect, adminOnly, carController.updateCar);
router.delete('/:id', protect, adminOnly, carController.deleteCar);

module.exports = router;