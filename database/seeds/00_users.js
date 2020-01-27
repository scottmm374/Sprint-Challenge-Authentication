exports.seed = async knex => {
  await knex("users").insert([
    { username: "Ann", password: "Nothing" },
    { username: "Sarah", password: "Something" }
  ]);
};
