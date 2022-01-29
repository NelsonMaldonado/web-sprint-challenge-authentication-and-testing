// Write your tests here
const server = require("./server")
const request = require("supertest")
const db = require("../data/dbConfig")

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})

afterAll(async () => {
  await db.destroy()
})

test("sanity", () => {
  expect(true).toBe(true)
})

describe("[POST] api/auth/register", () => {
  let res
  beforeEach(async () => {
    res = await request(server)
      .post("/api/auth/register")
      .send({ username: "nelly", password: "1234" })
  })

  it("responds with status 201", async () => {
    expect(res.status).toBe(201)
  })

  it("has 1 user in db", async () => {
    const users = await db("users")
    expect(users).toHaveLength(1)
  })
})
