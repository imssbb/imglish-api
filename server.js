const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const missionRoutes = require('./routes/mission-routes');
const studentRoutes = require('./routes/student-routes');

app.use(cors());
app.use(express.json());
app.use('/missions', missionRoutes);
app.use('/student', studentRoutes);

const PORT = process.env.PORT || 5050;

// basic home route
app.get('/', (req, res) => {
  res.send('Welcome to Imglish API');
});

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
