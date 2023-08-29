import sherlockAndAnagrams from ".";

describe("sherlock and anagrams - hashMap", () => {
  it("case 1", () => {
    expect(sherlockAndAnagrams("abba")).toBe(4);
    expect(sherlockAndAnagrams("abcd")).toBe(0);
  });

  it("case 2", () => {
    expect(sherlockAndAnagrams("ifailuhkqq")).toBe(3);
    expect(sherlockAndAnagrams("kkkk")).toBe(10);
  });

  it("case 3", () => {
    expect(sherlockAndAnagrams("cdcd")).toBe(5);
  });
});
