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
    missions_id: 1,
    audio_link: cloudinaryResponse.secure_url,
  };

  const [audioId] = await db('audios').insert(audioRecord);

  return {
    cloudinaryResponse,
    audioId,
  };
}

module.exports = { handleUpload };
