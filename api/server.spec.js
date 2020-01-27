const supertest = require("supertest");
const server = require("./server");
const db = require("../database/dbConfig");

test("server route / ", async () => {
  const res = await supertest(server).get("/");
  expect(res.status).toBe(200);
  expect(res.type).toBe("application/json");
  expect(res.body.message).toMatch(/Welcome/i);
});
