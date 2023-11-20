/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('audio', (table) => {
    table.increments('id').primary();
    table
      .integer('missions_id')
      .unsigned()
      .notNullable()
      .references('missions.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.string('audio_type').notNullable();
    table.string('audio_link').notNullable();
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
  return knex.schema.dropTable('audio');
};
