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

test("should login user", async () => {
  const login = await supertest(server)
    .post("/api/auth/login")
    .send({
      username: "Jason",
      password: "Nickleback"
    });
  expect(login.status).toBe(200);
  expect(login.text).toContain("token");
  expect(login.text).toContain("message");
});

// PASS  api/server.spec.js
// PASS  api/server.spec.js
//  √ server route /  (25ms)
//  √ should login user (103ms)
//  user registration
//    √ should reg new user (514ms)

//  console.log auth/auth-router.js:22
//    username, password Jason Nickleback

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        4.549s
// Ran all test suites related to changed files.
