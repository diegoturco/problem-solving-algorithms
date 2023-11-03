import aggregateEvents from ".";

describe("two sum", () => {
  it("case 1", () => {
    const events = [
      { name: "search_changed", id: 1 },
      { name: "search_changed", id: 2 },
      { name: "search_changed", id: 3 },
      { name: "search_failed", id: 1 },
    ];

    expect(aggregateEvents(events)).toEqual({
      search_changed: 3,
      search_failed: 1,
    });
  });
});
