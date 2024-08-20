const GovernmentOrder = require('../models/GovernmentOrder');
const UserOrder = require('../models/User_order');

// Create a new government order
const createOrder = async (req, res) => {
  const { order_type, order_description, user_id } = req.body;

  try {
    const order = await GovernmentOrder.create({
      order_type,
      order_description,
      user_id,
    });

    res.status(201).json({ message: 'Government order created successfully', order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all government orders
const getAllGovernmentOrders = async (req, res) => {
  try {
    const governmentOrders = await GovernmentOrder.findAll();
    res.status(200).json(governmentOrders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a government order by ID
const getGovernmentOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const governmentOrder = await GovernmentOrder.findByPk(id);
    if (!governmentOrder) {
      return res.status(404).json({ message: 'Government order not found' });
    }
    res.status(200).json(governmentOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a government order
const updateGovernmentOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { order_type, order_description, user_id } = req.body;
    const governmentOrder = await GovernmentOrder.findByPk(id);
    if (!governmentOrder) {
      return res.status(404).json({ message: 'Government order not found' });
    }
    await governmentOrder.update({
      order_type,
      order_description,
      user_id
    });
    res.status(200).json(governmentOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a government order
const deleteGovernmentOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const governmentOrder = await GovernmentOrder.findByPk(id);
    if (!governmentOrder) {
      return res.status(404).json({ message: 'Government order not found' });
    }
    await governmentOrder.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update order status for a citizen
const updateOrderStatusForCitizen = async (req, res) => {
  try {
    const { user_order_id } = req.params;
    const { received } = req.body;
    const userOrder = await UserOrder.findByPk(user_order_id);
    if (!userOrder) {
      return res.status(404).json({ error: 'Order not found for this citizen.' });
    }

    userOrder.received = received;
    userOrder.date_received = received ? new Date() : null;
    await userOrder.save();

    res.status(200).json({ message: 'Order status updated successfully.', userOrder });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the order status.' });
  }
};

module.exports = {
  createOrder,
  getAllGovernmentOrders,
  getGovernmentOrderById,
  updateGovernmentOrder,
  deleteGovernmentOrder,
  updateOrderStatusForCitizen,
};
