/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('audios').del();
  await knex('audios').insert([
    {
      missions_id: 1,
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700171043/audios/brili3iv7ohdlb72wu5q.m4a',
      audio_name: 'mission_1',
      audio_type: 'mission',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      missions_id: 1,
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700688128/audios/fh5athst4fzgrvaryrv4.m4a',
      audio_name: 'mission_1_dropthebeat',
      audio_type: 'mission_dropthebeat',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      missions_id: 1,
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700688185/audios/h2rjzwf1bscjknfmbyno.mp3',
      audio_name: 'mission_1-1',
      audio_type: 'mission_practice',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      missions_id: 1,
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700688205/audios/syomvpljgjpbtqvymtpc.mp3',
      audio_name: 'mission_1-2',
      audio_type: 'mission_practice',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      missions_id: 1,
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700688226/audios/irie6ieqqhjdjkxubdd2.mp3',
      audio_name: 'mission_1-3',
      audio_type: 'mission_practice',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      missions_id: 1,
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700688244/audios/fomimauio7z3jlqifya1.mp3',
      audio_name: 'mission_1-4',
      audio_type: 'mission_practice',
      created_at: new Date(),
      updated_at: new Date(),
    },
    //
    {
      missions_id: 2,
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700689646/audios/Mission%202/mf3yixngyhgkbzw38ylj.m4a',
      audio_name: 'mission_2',
      audio_type: 'mission',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      missions_id: 2,
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700689670/audios/Mission%202/nvftpjigywwkbltcli0i.m4a',
      audio_name: 'mission_2_dropthebeat',
      audio_type: 'mission_dropthebeat',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      missions_id: 2,
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700689692/audios/Mission%202/rmjwfpguhgzvpfjxssml.mp3',
      audio_name: 'mission_2-1',
      audio_type: 'mission_practice',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      missions_id: 2,
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700689710/audios/Mission%202/jqthtaoj5ffqfo2hw730.mp3',
      audio_name: 'mission_2-2',
      audio_type: 'mission_practice',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      missions_id: 2,
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700689727/audios/Mission%202/e1dznjzpnotceudetddm.mp3',
      audio_name: 'mission_2-3',
      audio_type: 'mission_practice',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      missions_id: 2,
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700689741/audios/Mission%202/grecik9jua60edl368rr.mp3',
      audio_name: 'mission_2-4',
      audio_type: 'mission_practice',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
};
