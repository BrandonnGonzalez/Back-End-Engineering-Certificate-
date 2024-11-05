/*
During this mini side project, I used multiple different array methods in order to decipher a secret message within the code I was given.
Throughout each step of the way, I left a comment of what exactly I was tasked with and how I solved it using the array methods.
*/



let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// step 0: length of original array
console.log(secretMessage.length);
console.log(secretMessage);


// step 1
// the pop() method removes the last element in an array.
secretMessage.pop();
// step 2: log the length of the array
console.log(secretMessage.length);

// step 3: array method to add things to an array
secretMessage.push('to');
secretMessage.push('Program');

// step 4: replace the word using bracket notation
secretMessage[7] = 'right';

// step 5: use array method to remove the first string of array
secretMessage.shift();

// step 6: use array method to add a string to beginning of array
secretMessage.unshift('Programming');

// step 7: Use array method to remove multiple strings and replace them
// syntax for splice() : array.splice(start, countOfIndices, 'string');
secretMessage.splice(6, 5, 'know');

// step 8: use console.log() and .join() to print the secret message as a sentence
console.log(secretMessage.join(' '));
