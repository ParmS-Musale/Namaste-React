import { sum } from "../sum";

test("Sum Function should be calculate the sum of two number", () => {
  const result = sum(1, 2);

  // Assertion
  expect(result).toBe(3);
});
