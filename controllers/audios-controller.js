const knex = require('knex')(require('../knexfile'));

// Get All Mission Information
const index = async (req, res) => {
  try {
    const { missions_id } = req.query;

    let query = knex('audios');

    // If missions_id is provided, add a where condition to filter by missions_id
    if (missions_id) {
      query = query.where({ missions_id });
    }

    const data = await query;

    res.json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving Audios: ${err}`);
  }
};

//Get Selected Mission Information
const findOne = async (req, res) => {
  try {
    const data = await knex('audios').where({ id: req.params.id });

    if (data.length === 0) {
      return res
        .status(404)
        .json({ message: `Error retreieving Audios:${req.params.id}` });
    }
    const missionData = data[0];
    res.status(200).json(missionData);
  } catch (err) {
    res.status(404).json({
      message: `Unable to retrieve mission  with ID ${req.params.id}`,
    });
  }
};

module.exports = { index, findOne };
