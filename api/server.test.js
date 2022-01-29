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

describe("")
