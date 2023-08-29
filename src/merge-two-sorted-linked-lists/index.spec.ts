import mergeTwoLists from ".";

describe("merge two sorted linked lists", () => {
  it("case 1", () => {   
    const head1 = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 4,
          next: null,
        },
      },
    };

    const head2 = {
      val: 1,
      next: {
        val: 3,
        next: {
          val: 4,
          next: null,
        },
      },
    };

    const mergedLists = {
      val: 1,
      next: {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: {
              val: 4,
              next: {
                val: 4,
                next: null
              },
            },
          },
        },
      },
    };
            
    expect(mergeTwoLists(head1, head2)).toStrictEqual(mergedLists);
  });
});
