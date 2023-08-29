function sherlockAndAnagrams(s: string): number {
  const hashMap = new Map<string, number>();

  console.log(s);

  const arr: string[] = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const result = s.substring(i, j + 1);
      arr.push(result);
    }
  }

  console.log(arr);
  
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const elementSorted = element.split("").sort().join("");

    if (hashMap.get(elementSorted)) {
      hashMap.set(elementSorted, (hashMap.get(elementSorted) || 0) + 1);
    } else {
      hashMap.set(elementSorted, 1);
    }
  }

  console.log(hashMap);

  let anagramPairsCount = 0;
  for (let [key, value] of hashMap.entries()) {
    console.log(`(${value} * (${value} - 1) / 2) = ${(value * (value - 1) / 2)}`);    
    anagramPairsCount += (value * (value - 1) / 2);
  }

  console.log(anagramPairsCount);

  return anagramPairsCount;
}

export default sherlockAndAnagrams;
