const cloudinary = require('cloudinary').v2;
const knex = require('knex');

const knexConfig = require('../knexfile');

const db = knex(knexConfig);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

async function handleUpload(file) {
  const cloudinaryResponse = await cloudinary.uploader.upload(file, {
    resource_type: 'auto',
    folder: 'studentsubmissions',
  });

  const audioRecord = {
    // FUTURE: update missions_id to be dynamically adjusted according to how Today's Mission is set on Student's Main Page
    missions_id: 1,
    student_id: 1, // Same with student_id, right now just hard coded to make it work, figure out a way to make this dynamic as with missions_id
    audio_link: cloudinaryResponse.secure_url,
  };

  const [audioId] = await db('audios').insert(audioRecord);

  return {
    cloudinaryResponse,
    audioId,
  };
}

module.exports = { handleUpload };
