import { multiply } from "./index.js";
import { add } from "./index.js";
import { subtract } from "./index.js";
import { divide } from "./index.js";

describe("add Command", () => {
  it("returns 5 if called with add(2, 3)", () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  it("returns a negative value if the greater argument is negative (Hint: use the matcher `toBeLessThan()`", () => {
    const result = add(3, -4);
    expect(result).toBeLessThan(0);
  });
  it("returns a value close to 0.3 if called with add(0.1, 0.2) (Hint: use the matcher `toBeCloseTo()", () => {
    const result = add(0.1, 0.2);
    expect(result).toBeCloseTo(0.3);
  });
});

describe("substract command", () => {
  it("returns 10 if called with subtract(15, 5)", () => {
    const result = subtract(15, 5);
    expect(result).toBe(10);
  });
  it("returns a negative value if the second argument is greater than the first one (use `toBeLessThan()` again)", () => {
    const result = subtract(15, 20);
    expect(result).toBe(10);
  });
});
