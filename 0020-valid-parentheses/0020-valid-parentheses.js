/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const mapping = {
        "(": ")",
        "{": "}",
        "[": "]"
    };

    for (let char of s) {
        if (char in mapping) {
            stack.push(char);
        } else {
            if (stack.length === 0) {
                return false;
            } else {
                let top = stack.pop();
                if (mapping[top] !== char) {
                    return false;
                }
            }
        }
    }
    return stack.length === 0;
};