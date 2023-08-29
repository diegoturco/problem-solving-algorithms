import checkMagazine from ".";

describe("ransom note", () => {
  it("case 1", () => {
    const magazine = ["give", "me", "one", "grand", "today", "night"];
    const note = ["give", "one", "grand", "today"];
    expect(checkMagazine(magazine, note)).toBe("Yes");
  });

  it("case 2", () => {
    const magazine = ["two", "times", "three", "is", "not", "four"];
    const note = ["two", "times", "two", "is", "four"];
    expect(checkMagazine(magazine, note)).toBe("No");
  });

  it("case 3", () => {
    const magazine = ["ive", "got", "a", "lovely", "bunch", "of", "coconuts"];
    const note = ["ive", "got", "some", "coconuts"];
    expect(checkMagazine(magazine, note)).toBe("No");
  });
});
