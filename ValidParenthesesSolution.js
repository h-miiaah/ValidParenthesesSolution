/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let map = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    let stack = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stack.push(s[i]);
        } else if (stack[stack.length-1] === map[s[i]]) {
            stack.pop()
        } else return false;
    }
    return stack.length ? false : true
   };
   
/*

- Create a hash (map) in order to identify the pairs
- In this hash (map) the closing brackets are associated with thier opening brackets
- When a closing bracket in the string matches with one of the keys of the hash (map), then its corresponding value will get removed from the top of the stack
- If there is a mismatch, the return will be false

*/
