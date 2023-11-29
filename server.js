const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const missionRoutes = require('./routes/mission-routes');
const studentRoutes = require('./routes/student-routes');
const uploaderRoute = require('./api/routes/upload-route');
const audioRoutes = require('./routes/audio-routes');
const feedbackRoutes = require('./routes/feedback-routes');
const submissionRoutes = require('./routes/submission-routes');

app.use(cors());
app.use(express.json());
app.use('/missions', missionRoutes);
app.use('/student', studentRoutes);
app.use('/audios/', audioRoutes);
app.use('/feedbacks', feedbackRoutes);
app.use('/submissions', submissionRoutes);
app.use('/api', uploaderRoute);

const PORT = process.env.PORT || 5050;

app.get('/', (req, res) => {
  res.send('Welcome to Imglish API');
});

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
