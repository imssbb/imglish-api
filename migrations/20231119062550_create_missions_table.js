/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable('missions', (table) => {
    table.increments('id').primary();
    table.text('mission_type').notNullable();
    table.text('mission_title').notNullable();
    table.text('intro_text').notNullable();
    table.text('empty_dialogue').notNullable();
    table.text('spacing_text').notNullable();
    table.text('main_dialogue').notNullable();
    table.text('explanation').notNullable();
    table.text('pattern_summary').notNullable();
    table.text('practice_info').notNullable();
    table.text('practice_pattern').notNullable();
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
  return knex.schema.dropTable('missions');
};
