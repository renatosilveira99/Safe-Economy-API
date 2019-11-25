'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContaSchema extends Schema {
  up () {
    this.create('contas', (table) => {
      table.increments()
      table.
        integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('nome', 50).notNullable()
      table.string('validade', 10).notNullable()
      table.string('codBarras', 50).notNullable().unique()
      table.float('valor', 10).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('contas')
  }
}

module.exports = ContaSchema
