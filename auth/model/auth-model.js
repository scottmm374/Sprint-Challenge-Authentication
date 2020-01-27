const db = require("../../database/dbConfig");
const bcrypt = require("bcryptjs");

function find() {
  return db("users");
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function findBy(filter) {
  return db("users")
    .where(filter)
    .select()
    .first();
}

async function addUser(user) {
  user.password = await bcrypt.hash(user.password, 10);
  const [id] = await db("users").insert(user);
  return findById(id);
}

module.exports = {
  find,
  findById,
  addUser,
  findBy
};
