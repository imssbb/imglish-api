const knex = require('knex')(require('../knexfile'));

//Get Selected Student Submissions
const findAllForStudent = async (req, res) => {
  try {
    const data = await knex('audios').where({ student_id: req.params.id });

    if (data.length === 0) {
      return res.status(404).json({
        message: `No Audios found for student with ID: ${req.params.id}`,
      });
    }

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: `Internal server error while retrieving Audios for student with ID: ${req.params.id}`,
    });
  }
};

module.exports = { findAllForStudent };
