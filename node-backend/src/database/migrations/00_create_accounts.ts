import { Knex } from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('accounts', table => {
        table.increments('id').primary();
        table.string('account_number').unique().notNullable();
        table.string('account_password').unique().notNullable();
        table.string('username').notNullable();
        table.float('balance').notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('accounts');
}