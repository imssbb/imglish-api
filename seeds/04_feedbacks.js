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
      feedback:
        'Great effort! Make sure we pay attention to the accents on words like "dinner" and "antying". Work on connecting "I was just gonna say".',
      practice_words:
        'Anything, Dinner, I was just gonna say that, Super, Heads ',
      feedback_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700703665/feedback/uliv4x3lilx770fxajwu.mp3',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      students_id: 1,
      mission_title: 'Mission 2: Eating Out',
      feedback:
        'Great effort! Make sure we pay attention to the accents on words like "dinner" and "antying". Work on connecting "I was just gonna say".',
      practice_words:
        'Anything, Dinner, I was just gonna say that, Super, Heads ',
      feedback_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700703665/feedback/uliv4x3lilx770fxajwu.mp3',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      students_id: 1,
      mission_title: 'Mission 3: Pouring',
      feedback:
        'Great effort! Make sure we pay attention to the accents on words like "dinner" and "antying". Work on connecting "I was just gonna say".',
      practice_words:
        'Anything, Dinner, I was just gonna say that, Super, Heads ',
      feedback_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700703665/feedback/uliv4x3lilx770fxajwu.mp3',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      students_id: 1,
      mission_title: 'Mission 4: You Never Know',
      feedback: 'Focus on clarity and pronunciation for better communication.',
      practice_words: 'house, family, travel, friend, music',
      feedback_link: '',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
};
