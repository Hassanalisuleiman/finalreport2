// src/controllers/letterController.js
// const { Letter, Addressee, LetterTemplate } = require('../models');
const Addressee = require('../models/Addressee');
const Letter = require('../models/Letter');
const LetterTemplate = require('../models/LetterTemplate');

exports.generateLetter = async (req, res) => {
  try {
    const { citizen_id, addressee_id, template_id, title, photo, user_id } = req.body;

    const addressee = await Addressee.findByPk(addressee_id);
    const template = await LetterTemplate.findByPk(template_id);

    if (!addressee || !template) {
      return res.status(404).json({ message: 'Addressee or Template not found' });
    }

    const content = template.template_content.replace('{{citizen_name}}', 'Citizen Name Placeholder') // You need to fetch and replace the actual citizen name
                                             .replace('{{addressee_name}}', addressee.name)
                                             .replace('{{organization}}', addressee.organization)
                                             .replace('{{country}}', addressee.country)
                                             .replace('{{date}}', new Date().toLocaleDateString());

    const letter = await Letter.create({
      citizen_id,
      addressee_id,
      title,
      photo,
      template_id,
      user_id,
      date: new Date(),
    });

    res.status(201).json({ message: 'Letter generated successfully', letter });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
