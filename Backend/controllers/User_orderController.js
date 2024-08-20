const UserOrder = require('../models/User_order');
const GovernmentOrder = require("../models/GovernmentOrder");
const User = require("../models/Users");

// Create a new CitizenOrder
const createCitizenOrder = async (req, res) => {
    try {
        const { user_id, order_id, received, date_received } = req.body;
        const userorder = await UserOrder.create({
            user_id,
            order_id,
            received,
            date_received
        });
        res.status(201).json(userorder);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the CitizenOrder.' });
    }
};

const getAllCitizenOrders = async (req, res) => {
    try {
        const userOrders = await UserOrder.findAll({
            include: [
                { model: User, attributes: ['first_name', 'last_name', 'street', 'house_no'] },
                { model: GovernmentOrder, attributes: ['order_type','order_description'] }
            ]
        });
        res.status(200).json(userOrders);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the CitizenOrders.' });
    }
};

// Update a CitizenOrder
const updateCitizenOrder = async (req, res) => {
    try {
        const { citizen_order_id } = req.params;
        const { received, date_received } = req.body;
        const userorder = await UserOrder.findByPk(citizen_order_id);
        if (userorder) {
            userorder.received = received;
            userorder.date_received = date_received;
            await userorder.save();
            res.status(200).json(userorder);
        } else {
            res.status(404).json({ error: 'CitizenOrder not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the CitizenOrder.' });
    }
};

// Get Citizens who have not received a specific order
const getCitizensWithoutOrder = async (req, res) => {
    try {
        const { order_id } = req.params;
        const citizens = await UserOrder.findAll({
            where: {
                order_id,
                received: false,
            },
            include: [{
                model: User,
                attributes: ['first_name', 'last_name', 'street', 'house_no'],
            }],
        });
        res.status(200).json(citizens);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the citizens.' });
    }
};

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
    createCitizenOrder,
    getAllCitizenOrders,
    updateCitizenOrder,
    getCitizensWithoutOrder,
    updateOrderStatusForCitizen
};