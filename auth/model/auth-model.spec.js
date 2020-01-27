const db = require("../../database/dbConfig");
const userMod = require("./auth-model");

// beforeEach(async () => {
//   await db.seed.run();
// });  Took this out, causing issues with unique Constraint

describe("Users model", () => {
  test("find", async () => {
    const users = await userMod.find();
    expect(users.length).toBeGreaterThan(0);
  });

  test("findById", async () => {
    const user = await userMod.findById(1);
    expect(user.username).toBe("Ann");
  });

//   test("addUser", async () => {
//     await userMod.addUser({ username: "John", password: "anything" });
//     const users = await db("users").select();
//     expect(users).toHaveLength(5);
//   });
// });
