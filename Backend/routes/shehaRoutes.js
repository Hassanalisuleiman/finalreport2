const express = require('express');
const router = express.Router();
const shehaController = require('../controllers/shehaController');

router.post('/sheha', shehaController.createSheha);
router.get('/sheha', shehaController.getAllShehas);
router.get('/sheha/:id', shehaController.getShehaById);
router.put('/sheha/:id', shehaController.updateSheha);
router.delete('/sheha/:id', shehaController.deleteSheha);

module.exports = router;
