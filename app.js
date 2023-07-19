// 1 
// Match the word "word" case insensitive 
const regexp1 = /\bword\b/i
const string1 = 'Word'
console.log(string1.match(regexp1)[0].length === string1.length)

// 2
// Use substitution to replace every occurrence of the word "i" with the word "I" (uppercase, I as in me).
const regexp2 = /\bi\b/g
const string2 = "i'm replacing it. am i not?"
console.log(string2.replace(regexp2, 'I'))

// 3
// Return the number of uppercase consonants //(B,C,D,F,..,X,Y,Z) in a given string 
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

// 6
// Oh no! It seems my friends spilled beer all over my keyboard last night and my keys are super sticky now. 
// Some of the time whennn I press a key, I get two duplicates.
const regexp6 = /(.)\1{2}/g
const string6 = "Can you ppplease help me fix thhhis?"
console.log(string6.replace(regexp6, '$1'))

//7
// Validate ip adress
const regexp7 = /^\b(?:[01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])\b\.\b(?:[01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])\b\.\b(?:[01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])\b\.\b(?:[01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])\b$/g
const string7 = "172.16.254.1"
console.log(string7.match(regexp7)[0] === string7)

