require("dotenv").config();

const knex = require('knex')({
	client: 'mysql',
	connection: {
		host: process.env.DATABASE_HOST || "db",
		user: process.env.DATABASE_USER || "urlshortener",
		password: process.env.DATABASE_PASSWORD || "urlshortener",
		database: process.env.DATABASE_NAME || "urlshortener",
		charset: "utf8"
		}
});

bookshelf = require("bookshelf")(knex);

module.exports = bookshelf.Model.extend({
  tableName: "urlshortener"
});
