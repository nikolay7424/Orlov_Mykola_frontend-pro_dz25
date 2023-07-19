// 1 
// match the word "word" case insensitive 
const regexp1 = /\bword\b/i
const string1 = 'Word'
console.log(string1.match(regexp1)[0].length === string1.length)

// 2
// Use substitution to replace every occurrence of the word "i" with the word "I" (uppercase, I as in me).
const regexp2 = /\bi\b/g
const string2 = "i'm replacing it. am i not?"
console.log(string2.replace(regexp2, 'I'))

// 3
//Return the number of uppercase consonants //(B,C,D,F,..,X,Y,Z) in a given string 
const regexp3 = /[^a-zAEIOU\s\W.½§1234567890!"#¤%&\/()=?´@£${[\]}~*\'¨\-_.,;:><| åäö]/g
const string3 = "ABcDeFO!"
console.log(string3.match(regexp3).length)

// 4
// Count the number of integers in a given string. 
const regexp4 = /[0-9]+/g
const string4 = "1, 2, 65, 2579"
console.log(string4.match(regexp4).length)

// 5
// Find all occurrences of 4 or more whitespace characters in a row throughout the string.
const regexp5 = /\s{4,}/g
const string5 = "lorem    ipsum  dolor sit     amet"
console.log(string5.match(regexp5).length)