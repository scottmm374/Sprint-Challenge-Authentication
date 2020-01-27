const bcrypt = require("bcryptjs");

exports.seed = async knex => {
  await knex("users").insert([
    { username: "Ann", password: bcrypt.hashSync("Nothing", 10) },
    { username: "Sarah", password: bcrypt.hashSync("Something", 10) }
  ]);
};
