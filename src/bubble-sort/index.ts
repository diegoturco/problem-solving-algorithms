function bubbleSort(nums: number[]) {
  for (let i = 0; i < nums.length - 1; i++) {
    // Last i elements are already sorted, so we don't need to check them
    for (let j = 0; j < nums.length - 1 - i; j++) {
      // Swap if the element found is greater than the next element
      if (nums[j] > nums[j + 1]) {
        // Swap elements using a temporary variable
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }

  return nums;
}

export default bubbleSort;
