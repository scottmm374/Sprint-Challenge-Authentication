const supertest = require("supertest");
const server = require("./server");
const db = require("../database/dbConfig");
const userMod = require("../auth/model/auth-model");

test("server route / ", async () => {
  const res = await supertest(server).get("/");
  expect(res.status).toBe(200);
  expect(res.type).toBe("application/json");
  expect(res.body.message).toMatch(/Welcome/i);
});

describe("user registration", () => {
  it("should reg new user", async () => {
    await db("users").truncate();
    const res = await supertest(server)
      .post("/api/auth/register")
      .send({
        username: "Jason",
        password: "Nickleback"
      });
    expect(res.status).toBe(201);
    expect(res.type).toBe("application/json");
  });
});

// describe("user login", () => {
//   it("should login user", async () => {
//     const login = await supertest(server)
//       .post("/api/auth/login")
//       .send({
//         username: "Ann",
//         password: "Nothing"
//       });
//     expect(res.status).toBe(200);
//     expect(login.text).toContain("token");
//     expect(login.text).toContain("message");
//   });
// });
