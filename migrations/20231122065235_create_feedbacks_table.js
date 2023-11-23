/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('feedbacks', (table) => {
    table.increments('id').primary();
    table
      .integer('students_id')
      .unsigned()
      .notNullable()
      .references('students.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
      .string('mission_title')
      .notNullable()
      .references('missions.mission_title')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.string('feedback').notNullable();
    table.string('practice_words').notNullable();
    table.string('feedback_link').nullable();
    table.text('main_dialogue').notNullable();

    // ** AUDIO FEEDBACK FUTURE RELEASE - Audio Files Foreign Key, teacher audio feedback **
    // table.string('audio_link').notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table
      .timestamp('updated_at')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('feedbacks');
};
