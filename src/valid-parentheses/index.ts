function isValidParentheses(s: string): boolean {
  const stack = [];

  const symbols: { [key: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let c of s) {
    // is closed bracket?
    if (symbols[c]) { 
      if (stack.length > 0 && stack[stack.length - 1] === symbols[c]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0;
}

export default isValidParentheses;
