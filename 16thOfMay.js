// Question 5 -> https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/submissions/1259491334/

// var convert = function (s, numRows) {
//   if (s.length === numRows) return s;
//   let resultStr = "";
//   for (let i = 0; i < s.length; i++) {
//     let newStr = s[i];
//     function recursive(newStr, s, count = 1) {
//       if (s.length <= count) return;
//       newStr += s[2 * (numRows - i)];
//       count += 2 * (numRows - i);
//       recursive(newStr, s.length, count);
//     }
//     resultStr += newStr;
//   }
//   return resultStr;
// };
// console.log(convert("PAYPALISHIRING", 3));

var convert = function(s, numRows) {
    if (numRows === 1) return s; // If numRows is 1, return the original string
    
    const rows = Array.from({ length: Math.min(numRows, s.length) }, () => ''); // Create an array to store rows
    let currentRow = 0; // Initialize the current row index
    let goingDown = false; // Flag to indicate whether we're going down or up in the zigzag pattern
    
    for (const char of s) {
        rows[currentRow] += char; // Append the current character to the current row
        
        // If we're at the first or last row, change direction
        if (currentRow === 0 || currentRow === numRows - 1) goingDown = !goingDown
        
        
        // Update the current row index based on the direction
        currentRow += goingDown ? 1 : -1;
    }
    
    // Concatenate all rows to get the final result
    return rows.join('');
}
console.log(convert("PAYPALISHIRING", 4))
// "PAHNAPLSIIGYIR"