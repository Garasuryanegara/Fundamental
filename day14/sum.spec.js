const sum = require("./index.js");

test("testing function sum", () => {
  expect(sum(3, 3)).toBe(6);
});
