import { beforeAll, beforeEach, test, it, expect, afterEach, afterAll, describe } from './core.js'
beforeAll(() => {
  console.log("before all")
})
beforeEach(() => {
  console.log("before each")
})


test("first test case", () => {
  console.log("first test case")
  expect(1).toBe(1)
})
// test.only("only test case", () => {
//   console.log("only test case")
// })
it("second test case", () => {
  console.log("second test case")
  expect(1).toBe(4)
})
afterEach(() => {
  console.log("after each")
})

describe("sub", () => {
  test("sub: test case", () => {
    console.log("sub: test case")
  })

})

afterAll(() => {
  console.log("after all")
})