function twoSum(nums: number[], target: number) {
  const map = new Map<number, number>();

  for (let index = 0; index < nums.length; index++) { /* Time O(N) */
    const complement = target - nums[index];

    if (map.has(complement)) {
      return [map.get(complement), index];
    }

    map.set(nums[index], index); /* Space O(N) */

    // console.log(`${complement} = (${target} - ${nums[index]})`);
    // console.log(map);     
  }

  return [-1, -1];
}

export default twoSum;
