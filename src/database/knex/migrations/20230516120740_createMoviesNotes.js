
exports.up = knex => knex.schema.createTable("movies_notes", table => {
    table.increments("id").primary();
    table.text("title");
    table.text("description");
    table.integer("rating");
    table.integer("user_id").references("id").inTable("users").onDelete("CASCADE");
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("update_at").default(knex.fn.now());
})


exports.down = knex => knex.schema.dropTable("movies_notes")
