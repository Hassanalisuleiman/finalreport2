const Shehia = require('../models/Shehia');

// Create a new Shehia
exports.createShehia = async (req, res) => {
    try {
        const { shehia_name } = req.body;
        const shehia = await Shehia.create({ shehia_name });
        res.status(201).json(shehia);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all Shehias
exports.getAllShehias = async (req, res) => {
    try {
        const shehias = await Shehia.findAll();
        res.status(200).json(shehias);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a Shehia by ID
exports.getShehiaById = async (req, res) => {
    try {
        const shehia = await Shehia.findByPk(req.params.id);
        if (shehia) {
            res.status(200).json(shehia);
        } else {
            res.status(404).json({ message: 'Shehia not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a Shehia by ID
exports.updateShehia = async (req, res) => {
    try {
        const { shehia_name } = req.body;
        const [updated] = await Shehia.update({ shehia_name }, {
            where: { shehia_id: req.params.id }
        });
        if (updated) {
            const updatedShehia = await Shehia.findByPk(req.params.id);
            res.status(200).json(updatedShehia);
        } else {
            res.status(404).json({ message: 'Shehia not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a Shehia by ID
exports.deleteShehia = async (req, res) => {
    try {
        const deleted = await Shehia.destroy({
            where: { shehia_id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Shehia not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
