const request = require("supertest");
const app = require("../app"); // "../app" = go up 1 folder and find app.js

describe("GET /", () => {
  test("should return Hello Express!", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello Express! CI-CD Test 2");
  });
});
