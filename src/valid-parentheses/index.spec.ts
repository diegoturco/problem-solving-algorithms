import isValidParentheses from ".";

describe("valid parentheses", () => {
  it("case 1", () => {
    expect(isValidParentheses("()")).toBe(true);
  });

  it("case 2", () => {
    expect(isValidParentheses("()[]{}")).toBe(true);
  });

  it("case 3", () => {
    expect(isValidParentheses("(]")).toBe(false);
  });

  it("case 4", () => {
    expect(isValidParentheses("([])")).toBe(true);
  });
});
