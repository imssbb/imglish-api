/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('audios', (table) => {
    table.increments('id').primary();
    table
      .integer('missions_id')
      .unsigned()
      .notNullable()
      .references('missions.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
      .integer('student_id')
      .unsigned()
      .nullable()
      .references('students.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.string('audio_link').notNullable();
    table.string('audio_name').notNullable().defaultTo('default_audio_name');
    table.string('audio_type').notNullable().defaultTo('default_audio_type');
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
  return knex.schema.dropTable('audios');
};
