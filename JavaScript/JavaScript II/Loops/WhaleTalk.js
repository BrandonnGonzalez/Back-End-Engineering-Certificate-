/*

Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

*/


// Step 1
let input = 'turpentine and turtles';
// Step 2
vowels = ['a', 'e', 'i', 'o', 'u'];

// Step 3
const resultArray = [];
// step 4
for (i = 0; i < input.length; i++) {
  // step 5
 // console.log(i);
  
  // step 6
  for (j = 0; j < vowels.length; j++) {
    // step 8
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
    }
    //console.log(j);

  }
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  } else if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
}

console.log(resultArray);
// step 13
const resultString = resultArray.join(' ').toUpperCase();
console.log(resultString);
