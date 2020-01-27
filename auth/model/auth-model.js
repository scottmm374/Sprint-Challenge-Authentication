const db = require("../../database/dbConfig");

function find() {
  return db("users");
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function addUser(user) {}

module.exports = {
  find,
  findById,
  addUser
};
