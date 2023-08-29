function checkMagazine(magazine: string[], note: string[]): string {
  const magazineMap = new Map<string, number>();

  for (let i = 0; i < magazine.length; i++) {
    if (magazineMap.get(magazine[i])) {
      magazineMap.set(magazine[i], (magazineMap.get(magazine[i]) || 0) + 1);
    } else {
      magazineMap.set(magazine[i], 1);
    }
  }

  for (let i = 0; i < note.length; i++) {
    if (magazineMap.get(note[i])) {
      magazineMap.set(note[i], (magazineMap.get(note[i]) || 0) - 1);
    } else {
      return "No";
    }
  }

  return "Yes";
}

export default checkMagazine;
