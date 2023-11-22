/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('missions').del();
  await knex('missions').insert([
    {
      mission_type: 'M1',
      mission_title: 'Dinner',
      intro_text: `오늘 저녁에는 뭘 드실 예정이신가요!? 
      저희 삶에서 제일 어려운 질문이죠... "오늘은 뭘 먹을까?" 하하 
      오늘 다일로그에서는 과연 대화가 어떻게 흘러가는지 들어보세요 :)`,
      empty_dialogue: JSON.stringify({
        Instruction: '어떻게 들리시는지 아래 적어보세요.',
        title: "Today's Dialogue",
        entries: [
          {
            speaker: 'A',
            text: '',
          },
          {
            speaker: 'B',
            text: '',
          },
          {
            speaker: 'A',
            text: '',
          },
          {
            speaker: 'B',
            text: '',
          },
        ],
      }),
      spacing_text: 'WARNING 아래 답이 있습니다!!!',
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
      explanation: 'WARNING',
      pattern_summary: JSON.stringify({
        entries: [
          {
            pattern: `1) and don't say ~`,
            text: '그리고 ~라고 말하지 마',
          },
          {
            pattern: '2) to go out',
            text: '외식',
          },
          {
            pattern: '3) Head or tails',
            text: '동전 던지기로 무엇을 정할 때',
          },
        ],
      }),

      practice_info: '?',
      practice_pattern: JSON.stringify({
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
            text: ' Well, then. Heads or tails?',
          },
        ],
      }),
    },
    {
      mission_type: 'M1',
      mission_title: 'Dinner',
      intro_text: `오늘 저녁에는 뭘 드실 예정이신가요!? 
      저희 삶에서 제일 어려운 질문이죠... "오늘은 뭘 먹을까?" 하하 
      오늘 다일로그에서는 과연 대화가 어떻게 흘러가는지 들어보세요 :)`,
      empty_dialogue: JSON.stringify({
        Instruction: '어떻게 들리시는지 아래 적어보세요.',
        title: "Today's Dialogue",
        entries: [
          {
            speaker: 'A',
            text: '',
          },
          {
            speaker: 'B',
            text: '',
          },
          {
            speaker: 'A',
            text: '',
          },
          {
            speaker: 'B',
            text: '',
          },
        ],
      }),
      spacing_text: 'WARNING 아래 답이 있습니다!!!',
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
          // {
          //   speaker: 'A',
          //   text: "Oh my gosh, but I really don't care~~~ I'm just super hungry.",
          // },
          // {
          //   speaker: 'B',
          //   text: 'Well, then. Heads or tails?',
          // },
        ],
      }),
      explanation: 'WARNING',
      pattern_summary: 'hello',
      practice_info: 'Information about practice.',
      practice_pattern: '?',
    },
    {
      mission_type: 'M1',
      mission_title: 'Dinner',
      intro_text: `오늘 저녁에는 뭘 드실 예정이신가요!? 
      저희 삶에서 제일 어려운 질문이죠... "오늘은 뭘 먹을까?" 하하 
      오늘 다일로그에서는 과연 대화가 어떻게 흘러가는지 들어보세요 :)`,
      empty_dialogue: JSON.stringify({
        Instruction: '어떻게 들리시는지 아래 적어보세요.',
        title: "Today's Dialogue",
        entries: [
          {
            speaker: 'A',
            text: '',
          },
          {
            speaker: 'B',
            text: '',
          },
          {
            speaker: 'A',
            text: '',
          },
          {
            speaker: 'B',
            text: '',
          },
        ],
      }),
      spacing_text: 'WARNING 아래 답이 있습니다!!!',
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
          // {
          //   speaker: 'A',
          //   text: "Oh my gosh, but I really don't care~~~ I'm just super hungry.",
          // },
          // {
          //   speaker: 'B',
          //   text: 'Well, then. Heads or tails?',
          // },
        ],
      }),
      explanation: 'WARNING',
      pattern_summary: 'hello',
      practice_info: 'Information about practice.',
      practice_pattern: '?',
    },
    {
      mission_type: 'M1',
      mission_title: 'Dinner',
      intro_text: `오늘 저녁에는 뭘 드실 예정이신가요!? 
      저희 삶에서 제일 어려운 질문이죠... "오늘은 뭘 먹을까?" 하하 
      오늘 다일로그에서는 과연 대화가 어떻게 흘러가는지 들어보세요 :)`,
      empty_dialogue: JSON.stringify({
        Instruction: '어떻게 들리시는지 아래 적어보세요.',
        title: "Today's Dialogue",
        entries: [
          {
            speaker: 'A',
            text: '',
          },
          {
            speaker: 'B',
            text: '',
          },
          {
            speaker: 'A',
            text: '',
          },
          {
            speaker: 'B',
            text: '',
          },
        ],
      }),
      spacing_text: 'WARNING 아래 답이 있습니다!!!',
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
          // {
          //   speaker: 'A',
          //   text: "Oh my gosh, but I really don't care~~~ I'm just super hungry.",
          // },
          // {
          //   speaker: 'B',
          //   text: 'Well, then. Heads or tails?',
          // },
        ],
      }),
      explanation: 'WARNING',
      pattern_summary: 'hello',
      practice_info: 'Information about practice.',
      practice_pattern: '?',
    },
  ]);
};

//   spacing_text: 'WARNING 아래 답이 있습니다!!!',
// main_dialogue: JSON.stringify({
//   Instruction: '어떻게 들리시는지 아래 적어보세요.',
//   title: "Today's Dialogue",
//   entries: [
//     {
//       speaker: 'A',
//       text: "What do you wanna have for dinner? And don't say anything.",
//     },
//     {
//       speaker: 'B',
//       text: "Aw... I was just gonna say that. Well, do you wanna go out or eat at home? And don't say that you don't care.",
//     },
//     {
//       speaker: 'A',
//       text: "Oh my gosh, but I really don't care~~~ I'm just super hungry.",
//     },
//     {
//       speaker: 'B',
//       text: 'Well, then. Heads or tails?',
//     },
//   ],
// }),
//   //   explanation: 'WARNING 아래 답이 있습니다!!!',
//   pattern_summary: JSON.stringify({
//     title: '오늘의 핵심표현',
//     entries: [
//       {
//         subtitle: "1) and don't say~ ",
//         text: '그리고 ~라고 말하지 마',
//       },
//       {
//         subtitle: '2) to go out',
//         text: '외식',
//       },
//       {
//         subtitle: '3) Heads or tails',
//         text: '동전 던지기로 무엇을 정할 때',
//       },
//     ],
//   }),
//   practice_info: 'Information about practice.',
// practice_pattern: JSON.stringify({
//   Instruction:
//     '자, 이해하셨으면 같이 연습 바로갑니다! 머리에 박힐수있도록 비트 드립니다. 이해만 하시면 회화는 늘지 않는다는걸! 바로 같이 연습해 봅시다 :)\n\n - 나눠서 연음 x 2\n - 전체 조금 천천히 x 3\n - 정상속도 x 3\n\n 정상 속도로 될 때까지 무한 반복쓰! 😎 억양과 감정을 최대한 100% 카피 연습!',
//   title: 'DROP THE BEAT',
//   entries: [
//     {
//       speaker: 'A',
//       audio: '',
//     },
//     {
//       speaker: 'B',
//       audio: '',
//     },
//     {
//       speaker: 'A',
//       audio: '',
//     },
//     {
//       speaker: 'B',
//       audio: '',
//     },
//   ],
// }),
// },
