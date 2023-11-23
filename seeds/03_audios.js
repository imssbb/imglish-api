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
    //
    //
    //
    //

    {
      missions_id: 3,
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700722426/audios/Mission%203/spp04o41d1x9vzidowmw.m4a',
      audio_name: 'mission_3',
      audio_type: 'mission',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      missions_id: 3,
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700722444/audios/Mission%203/o4a2kb534uggmw8si87s.m4a',
      audio_name: 'mission_3_dropthebeat',
      audio_type: 'mission_dropthebeat',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      missions_id: 3,
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700722469/audios/Mission%203/cm3lhikdzy8o1kafyfyq.mp3',
      audio_name: 'mission_3-1',
      audio_type: 'mission_practice',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      missions_id: 3,
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700722491/audios/Mission%203/sdny9drq78yrfxjdj01c.mp3',
      audio_name: 'mission_3-2',
      audio_type: 'mission_practice',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      missions_id: 3,
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700722514/audios/Mission%203/chpt4fliladm8dttcdyq.mp3',
      audio_name: 'mission_3-3',
      audio_type: 'mission_practice',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      missions_id: 3,
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700722532/audios/Mission%203/sdwe24awakjnlgwryv48.mp3',
      audio_name: 'mission_3-4',
      audio_type: 'mission_practice',
      created_at: new Date(),
      updated_at: new Date(),
    },

    //
    //
    //
    //

    {
      missions_id: 4,
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700722556/audios/Mission%204/ecwe5jyhqt29jum6gbk9.m4a',
      audio_name: 'mission_4',
      audio_type: 'mission',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      missions_id: 4,
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700722571/audios/Mission%204/cv0ijczhynyd52w0zy9i.m4a',
      audio_name: 'mission_4_dropthebeat',
      audio_type: 'mission_dropthebeat',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      missions_id: 4,
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700722590/audios/Mission%204/rexum0cyzzagrkbsqbvk.mp3',
      audio_name: 'mission_4-1',
      audio_type: 'mission_practice',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      missions_id: 4,
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700722610/audios/Mission%204/lghojux8mrlmoeepajby.mp3',
      audio_name: 'mission_4-2',
      audio_type: 'mission_practice',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      missions_id: 4,
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700722629/audios/Mission%204/n5eu2waot2bbu31lbn8n.mp3',
      audio_name: 'mission_4-3',
      audio_type: 'mission_practice',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      missions_id: 4,
      audio_link:
        'https://res.cloudinary.com/dnuytgnzz/video/upload/v1700722643/audios/Mission%204/v4wny3rr1kgctw4aakg8.mp3',
      audio_name: 'mission_4-4',
      audio_type: 'mission_practice',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
};
