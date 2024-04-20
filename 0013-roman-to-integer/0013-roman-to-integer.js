/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    const romanNumber = { 
        I : 1,
        V : 5, 
        X : 10,
        L : 50,
        C : 100,
        D : 500, 
        M : 1000
    };
    for (let i = 0; i < s.length; i++){
        let currentS = romanNumber[s[i]];
        if(i < s.length && romanNumber[s[i + 1]]> currentS) {
            result -= currentS;
        }else{ 
            result += currentS;
        }
    }
    return result;
};