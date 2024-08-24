/*
You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

The input string s is valid if and only if:

Every open bracket is closed by the same type of close bracket.
Open brackets are closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Return true if s is a valid string, and false otherwise.
*/

/*
Input: s = "[]"
Output: true

Input: s = "([{}])"
Output: true

Input: s = "[(])"
Output: false
*/

// Time Complexity O(n)
//
// function isValid(s) {
//   const stack = []
//   const openBrackets = new Set(["(", "{", "["])
//   const bracketPairs = {
//     ")": "(",
//     "}": "{",
//     "]": "[",
//   }

//   for (let char of s) {
//     // first iteration triggers this
//     if (openBrackets.has(char)) {
//       stack.push(char)
//     } else {
//       // The stack is not empty (stack.length > 0), and stack.pop() removes '('.
//       // Stack becomes empty again: stack = [] but third letter retriggers if statement
//       if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
//         return false
//       }
//     }
//   }

//   // After processing all characters, the stack is empty (stack.length === 0).
//   // This means every opening bracket had a matching and correctly ordered closing bracket.
//   return stack.length === 0
// }

function isValid(s) {
  const stack = []
  const brackets = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ])

  for (const x of s) {
    if (brackets.has(x)) {
      stack.push(brackets.get(x))
    } else if (stack.length === 0 || stack.pop() !== x) {
      return false
    }
  }
  return stack.length === 0
}

console.log(isValid("()[]{}"))
