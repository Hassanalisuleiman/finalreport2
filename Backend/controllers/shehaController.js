const Sheha = require('./models/Sheha');

// Create a new Sheha
exports.createSheha = async (req, res) => {
    try {
        const { shehia, user_id } = req.body;
        const sheha = await Sheha.create({ shehia, user_id });
        res.status(201).json(sheha);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all Shehas
exports.getAllShehas = async (req, res) => {
    try {
        const shehas = await Sheha.findAll();
        res.status(200).json(shehas);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a Sheha by ID
exports.getShehaById = async (req, res) => {
    try {
        const sheha = await Sheha.findByPk(req.params.id);
        if (sheha) {
            res.status(200).json(sheha);
        } else {
            res.status(404).json({ message: 'Sheha not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a Sheha by ID
exports.updateSheha = async (req, res) => {
    try {
        const { shehia, user_id } = req.body;
        const [updated] = await Sheha.update({ shehia, user_id }, {
            where: { sheha_id: req.params.id }
        });
        if (updated) {
            const updatedSheha = await Sheha.findByPk(req.params.id);
            res.status(200).json(updatedSheha);
        } else {
            res.status(404).json({ message: 'Sheha not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a Sheha by ID
exports.deleteSheha = async (req, res) => {
    try {
        const deleted = await Sheha.destroy({
            where: { sheha_id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Sheha not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
