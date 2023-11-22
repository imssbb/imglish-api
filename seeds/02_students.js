/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('students').del();
  await knex('students').insert([
    { id: 1, name: 'Stephen' },
    { id: 2, name: 'John' },
    { id: 3, name: 'Sarah' },
    { id: 4, name: 'Bob' },
    { id: 5, name: 'Karen' },
  ]);
};
