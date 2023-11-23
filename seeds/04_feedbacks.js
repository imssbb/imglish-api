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
      main_dialogue: JSON.stringify({
        entries: [
          {
            speaker: 'A',
            text: "What do you wanna have for dinner? And don't say anything.",
          },
          {
            speaker: 'B',
            text: "Aw... I was just gonna say that. Well, do you wanna go out or eat at home? And don't say that you don't care.",
          },
          {
            speaker: 'A',
            text: "Oh my gosh, but I really don't care~~~ I'm just super hungry.",
          },
          {
            speaker: 'B',
            text: 'Well, then. Heads or tails?',
          },
        ],
      }),
      feedback:
        'Great effort! Make sure we pay attention to the accents on words like "dinner" and "anything". Work on connecting "I was just gonna say".',
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
      main_dialogue: JSON.stringify({
        entries: [
          {
            speaker: 'A',
            text: "Where's the food? Please don't tell me you forgot.",
          },
          {
            speaker: 'B',
            text: 'What? I thought we were eating out tonight.',
          },
          {
            speaker: 'A',
            text: 'NO...? Who said that?',
          },
          {
            speaker: 'B',
            text: `Well, it's too late now- Let's just flip a coin. 
            Heads for eating out and tails for getting take-out.`,
          },
        ],
      }),
      feedback:
        'Nicely done! Try to focus on contractions, it will make a big difference in the long run!',
      practice_words: `Where is -> Where's, What (wut), I thought we were, Who said THAT, Let's just flip a coin `,
      feedback_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700774806/feedback/ozjeitfb6zeshvpwhcmc.mp3',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      students_id: 1,
      mission_title: 'Mission 3: Pouring',
      main_dialogue: JSON.stringify({
        entries: [
          {
            speaker: 'A',
            text: 'Hey, What’s up put the weather today? ',
          },
          {
            speaker: 'B',
            text: ' I know. Right? It looks it’s gonna pour.',
          },
          {
            speaker: 'A',
            text: 'Yeah. I heard it was supposed to clear afternoon though. ',
          },
          {
            speaker: 'B',
            text: ` Really? That’s good to hear. I hate getting soak. `,
          },
        ],
      }),
      feedback:
        'Sounding Great :) Focusing on the context and giving it more life would be great! Try to imagine the situation and make it sound real!',
      practice_words: `WHAT'S's up with the~ , supposed to, in the afternoon though, that's good to hear, hate getting soaked `,
      feedback_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700774837/feedback/wh5ecbwcgmabdkdawpx7.mp3',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      students_id: 1,
      mission_title: 'Mission 4: You Never Know',
      main_dialogue: JSON.stringify({
        entries: [
          {
            speaker: 'A',
            text: `Yup, but you never know... the weather forecast isn't the most reliable thing.`,
          },
          {
            speaker: 'B',
            text: `Yeah~ True. One time it said it was sunny when it was actually pouring like crazy outside. `,
          },
          {
            speaker: 'A',
            text: ' Exactly.. it feels like they just make stuff up. ',
          },
          {
            speaker: 'B',
            text: `Mhm, and they're not really good at it either.`,
          },
        ],
      }),
      feedback: `Well done! Make sure we don't run through the words too quickly. Clarity is key! .`,
      practice_words:
        'Yup, most reliable thing, it feels like, not really good at it either ',
      feedback_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700774856/feedback/rcwvxir3lhc2ntqysfte.mp3',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
};
