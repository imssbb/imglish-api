const knex = require('knex')(require('../knexfile'));

// // Get All Feedbacks
// const index = async (_req, res) => {
//   try {
//     const data = await knex('feedbacks');
//     res.json(data);
//   } catch (err) {
//     res.status(400).send(`Error retreiving Feedbacks: ${err}`);
//   }
// };

// Get All Feedbacks for a specific student
const findAllByStudentId = async (req, res) => {
  try {
    const data = await knex('feedbacks').where({
      students_id: req.params.students_id, // Corrected from req.params.students_id
    });

    if (data.length === 0) {
      return res.status(404).json({
        message: `No Feedbacks found for students_id: ${req.params.students_id}`,
      });
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({
      message: `Unable to retrieve Feedbacks for students_id: ${req.params.students_id}`,
    });
  }
};

//Get Selected Feedback
const findOne = async (req, res) => {
  try {
    const data = await knex('feedbacks').where({ id: req.params.id });

    if (data.length === 0) {
      return res.status(404).json({
        message: `Error retrieving Feedback for ID: ${req.params.id}`,
      });
    }

    const feedbackData = data[0];
    res.status(200).json(feedbackData);
  } catch (err) {
    res.status(500).json({
      message: `Unable to retrieve Feedback with ID ${req.params.id}`,
    });
  }
};

module.exports = { findAllByStudentId, findOne };
