function sherlockAndAnagrams(s: string): number {
  console.log(s);

  const array: string[] = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const result = s.substring(i, j + 1);
      array.push(result);
    }
  }

  console.log(array);

  const arraySorted = array.map((element) => element.split("").sort().join(""));

  console.log(arraySorted);

  let anagramPairsCount = 0;
  for (let i = 0; i < arraySorted.length; i++) {
    for (let j = i + 1; j < arraySorted.length; j++) {
      console.log(`${arraySorted[i]} === ${arraySorted[j]}`);
      if (arraySorted[i] === arraySorted[j]) {
        anagramPairsCount++;
      }
    }
  }

  console.log(anagramPairsCount);

  return anagramPairsCount;
}

export default sherlockAndAnagrams;
