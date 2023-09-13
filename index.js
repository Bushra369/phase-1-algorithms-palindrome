function isPalindrome(word) {
  // Write your algorithm here
 
    const length = word.length;
    for (let i = 0; i < length / 2; i++) {
      if (word[i] !== word[length - 1 - i]) {
        return false;
      }
    }
    return true;
  
  
 
  
  
}

/* 
  Add your pseudocode here
function isPalindrome(word):
length = length of word
for i from 0 to length / 2:
    if word[i] is not equal to word[length - 1 - i]:
        return false
return true
*/

/*
  Add written explanation of your solution here
  this solution calculates the length of the word, iterates through the characters, and returns true if it's a palindrome and false if it's not

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
