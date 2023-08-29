function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  let prefix = strs[0];
  console.debug(`prefix: ${prefix}`);

  // starting for loop at index 1
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {      
      prefix = prefix.substring(0, prefix.length - 1);
      console.debug(`strs[i]: ${strs[i]} indexOf prefix: ${prefix} `);

      if (prefix === "") return "";
    }
  }
  return prefix;
}

export default longestCommonPrefix;
