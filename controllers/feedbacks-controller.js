const knex = require('knex')(require('../knexfile'));

// Get All Feedbacks
const index = async (_req, res) => {
  try {
    const data = await knex('feedbacks');
    res.json(data);
  } catch (err) {
    res.status(400).send(`Error retreiving Feedbacks: ${err}`);
  }
};

//Get Selected Feedback
const findOne = async (req, res) => {
  try {
    const data = await knex('feedbacks').where({ id: req.params.id });

    if (data.length === 0) {
      return res
        .status(404)
        .json({ message: `Error retreieving Feedbacks:${req.params.id}` });
    }
    const missionData = data[0];
    res.status(200).json(missionData);
  } catch (err) {
    res.status(404).json({
      message: `Unable to retrieve Feedback with ID ${req.params.id}`,
    });
  }
};

module.exports = { index, findOne };
