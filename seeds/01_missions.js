/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('missions').del();
  await knex('missions').insert([
    {
      mission_title: 'Mission 1: Dinner',
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
      mission_title: 'Mission 2: Eating Out',
      intro_text: `오늘은 어제 배우신 패턴을 
      응용한 새로운 다일로그를 보내드립니다~ 
      패턴들이 조금 더 익숙해지셨을까요? :) `,
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
      practice_pattern: JSON.stringify({
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
    },
  ]);
};
