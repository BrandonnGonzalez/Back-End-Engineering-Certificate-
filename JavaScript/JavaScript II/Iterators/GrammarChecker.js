let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a stunning 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// Step 3: counter variable initialized and using the forEach iterator method 
let count = 0;
storyWords.forEach((word) => {
  count++;

// Step 4: Filtering out all of the instances of the word 'literally' to shorten the story and remove unnecessary words.
// Step 5:  continue with the already initialized storyWords variable assigned to the invocation of the .filter() method on the array. Give it a callback function with a parameter of word.
});
 storyWords = storyWords.filter((word) => {
  // Step 6: return every word that is not equal to the unnecessaryWord 'literally'.
  return word !== unnecessaryWord;
})

// Step 7: storyWords array gets reassigned with a mapping method that will check with a conditional statement, if a word is misspelled. If it is mispelled, that word will get corrected to its correct spelling, if nothing occurs, it will just return the word and move on until the array is done being iterated through.
storyWords = storyWords.map((word) => {
  if (word === misspelledWord) {
    return 'beautiful' 
  } else {
    return word;
  }

});

// Step 8: badWordIndex is initialized to storyWords.findIndex() to find the index of the possible word(s) that contains the bad word declared as 'freaking'.
badWordIndex = storyWords.findIndex((word) => {
  return word === badWord;

});
console.log(badWordIndex); // The bad word will be the word 'freaking', which is in indice 78.

// Step 9: Replacing the word with something more appropriate, like 'really'.
storyWords[78] = 'really';

//console.log(count);

// Step 10: lengthCheck will test whether every word in the array has less than or equal to 10 characters. If not every word meets the condition, it return False, else, it returns True.
lengthCheck = storyWords.every((word) => {
  return word.length <= 10;

});
console.log(lengthCheck);

// Step 11: This forEach initialization checks for the word that is greater than 10 characters. When it is found, it is printed to the console. We then just manually replace it.
storyWords.forEach((word) => {
  word.length > 10 && console.log(word);

});

// Step 2: Using the join method invocation to log the final story to the console
console.log(storyWords.join(' '));



//console.log(storyWords);


