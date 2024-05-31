function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  if (word === reversedWord)
    { return true
    }
       else { return false
       };
    }
      

/* 
  function isPalindrome(word) {
    if word equals reversedWord reversed
    returns word = true if word is same reversed;
    else word returns false;
  }
*/

/*
  The isPalindrome funtion takes a word as a parameter and using the variable reveresedWord to reverse the word, the function then checks
  to see if the the word is equal to itself in reversed form and if it is it returns true if not it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: false");
  console.log("=>", isPalindrome("alfred"));
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
