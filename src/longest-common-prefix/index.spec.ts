import longestCommonPrefix from ".";

describe("longest common prefix", () => {
  it("case 1", () => {
    expect(longestCommonPrefix(["flower","flow","flight"])).toEqual("fl");
  });

  it("case 2", () => {
    expect(longestCommonPrefix(["dog","racecar","car"])).toEqual("");
  });

  it("case 3", () => {
    expect(longestCommonPrefix(["a"])).toEqual("a");
  });

  it("case 4", () => {
    expect(longestCommonPrefix(["", "b"])).toEqual("");
  });

  it("case 5", () => {
    expect(longestCommonPrefix(["leets", "leetcode", "leet", "leeds"])).toEqual("lee");
  });
});
