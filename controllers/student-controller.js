const knex = require('knex')(require('../knexfile'));

// Get All Student Information
const index = async (_req, res) => {
  try {
    const data = await knex('students');
    res.json(data);
  } catch (err) {
    res.status(400).send(`Error retreiving Warehouses: ${err}`);
  }
};

//Get Single Student Information
const findOne = async (req, res) => {
  try {
    const data = await knex('students').where({ id: req.params.id });

    if (data.length === 0) {
      return res
        .status(404)
        .json({ message: `Error retreieving student:${req.params.id}` });
    }
    const studentData = data[0];
    res.status(200).json(studentData);
  } catch (err) {
    res.status(404).json({
      message: `Unable to retrieve warehouse data for warehouse with ID ${req.params.id}`,
    });
  }
};

// Get Inventories for a Given Warehouse

// const allFeedback = async (req, res) => {
//     try {
//       const feedbacks = await knex('students')
//         .join('feedbacks', 'inventories.warehouse_id', 'warehouses.id')
//         .where({ warehouse_id: req.params.id });
//       res.json(inventories);
//     } catch (err) {
//       res.json(err);
//     }
//   };

module.exports = { index, findOne };
