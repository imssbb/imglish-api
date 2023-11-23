/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('feedbacks').del();
  await knex('feedbacks').insert([
    {
      students_id: 1,
      mission_title: 'Mission 1: Dinner',
      feedback: 'Great effort! Your pronunciation is improving.',
      practice_words: 'coffee, computer, book, sky, laughter',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      students_id: 1,
      mission_title: 'Mission 1: Dinner',

      feedback: 'Focus on clarity and pronunciation for better communication.',
      practice_words: 'house, family, travel, friend, music',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      students_id: 3,
      mission_title: 'Mission 1: Dinner',

      feedback: 'Well done! Your spoken English is quite clear.',
      practice_words: 'job, hobby, movie, city, nature',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      students_id: 4,
      mission_title: 'Mission 1: Dinner',

      feedback: 'Improve intonation to make your speech more engaging.',
      practice_words: 'car, school, party, beach, happiness',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      students_id: 5,
      mission_title: 'Mission 1: Dinner',

      feedback: 'Practice longer sentences to enhance your fluency.',
      practice_words: 'food, journey, dream, holiday, adventure',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
};
