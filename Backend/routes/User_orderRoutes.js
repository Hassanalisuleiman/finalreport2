// routes/citizenOrderRoutes.js

const express = require('express');
const router = express.Router();
const userOrderController = require('../controllers/User_orderController');

// Route to create a new CitizenOrder
router.post('/userorders', userOrderController.createCitizenOrder);

// Route to get all CitizenOrders
router.get('/userorders', userOrderController.getAllCitizenOrders);

// Route to update a specific CitizenOrder
router.put('/:userorders_order_id', userOrderController.updateCitizenOrder);

// Route to get citizens who have not received a specific order
router.get('/not-received/:order_id', userOrderController.getCitizensWithoutOrder);

// Route to update the status of a specific CitizenOrder
router.put('/userorders/:user_order_id/status',userOrderController. updateOrderStatusForCitizen);

module.exports = router;
