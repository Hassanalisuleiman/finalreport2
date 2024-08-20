const express = require('express');
const router = express.Router();
const governmentOrderController = require('../controllers/governmentOrderController');

// Create a new government order
router.post('/governmentorders', governmentOrderController.createOrder);

// Get all government orders
router.get('/governmentorders', governmentOrderController.getAllGovernmentOrders);

// Get a government order by ID
router.get('/governmentorders/:id', governmentOrderController.getGovernmentOrderById);

// Update a government order
router.put('/governmentorders/:id', governmentOrderController.updateGovernmentOrder);

// Delete a government order
router.delete('/governmentorders/:id', governmentOrderController.deleteGovernmentOrder);

// Citizen updates order status
router.put('/userorder/:user_order_id', governmentOrderController.updateOrderStatusForCitizen);

module.exports = router;
