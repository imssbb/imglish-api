/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('audios').del();
  await knex('audios').insert([
    {
      missions_id: 1, // Foreign key referencing a valid mission ID
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700171043/audios/brili3iv7ohdlb72wu5q.m4a',
      audio_name: 'mission_1',
      audio_type: 'mission',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      missions_id: 1, // Foreign key referencing a valid mission ID
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700171043/audios/brili3iv7ohdlb72wu5q.m4a',
      audio_name: 'mission_1_breakdown',
      audio_type: 'mission_breakdown',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      missions_id: 1, // Foreign key referencing a valid mission ID
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700171043/audios/brili3iv7ohdlb72wu5q.m4a',
      audio_name: 'mission_1_dropthebeat',
      audio_type: 'mission_dropthebeat',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
};
