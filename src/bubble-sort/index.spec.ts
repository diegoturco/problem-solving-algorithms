import bubbleSort from ".";

describe("two sum", () => {
  it("case 1", () => {
    const nums = [5, 4, 3, 2, 1];
    expect(bubbleSort(nums)).toEqual([1, 2, 3, 4, 5]);
  });

  it("case 2", () => {
    const nums = [2, 0, 2, 1, 1, 0];
    expect(bubbleSort(nums)).toEqual([0, 0, 1, 1, 2, 2]);
  });

  it("case 3", () => {
    const nums = [2, 0, 1];
    expect(bubbleSort(nums)).toEqual([0, 1, 2]);
  });
});
