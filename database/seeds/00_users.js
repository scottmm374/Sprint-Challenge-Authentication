const bcrypt = require("bcryptjs");

exports.seed = async knex => {
  await knex("users").truncate();
  await knex("users").insert([
    { username: "Ann", password: bcrypt.hash("Nothing", 10) },
    { username: "Sarah", password: bcrypt.hash("Something", 10) }
  ]);
};
