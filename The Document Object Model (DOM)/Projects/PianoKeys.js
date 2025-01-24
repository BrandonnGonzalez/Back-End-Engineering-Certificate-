/*
I took on a role of becoming a temporary web developer for a music education company. This client wanted me to create an interactive game to help their beginner-level piano 
students study! With this role, I created a web piano player with DOM events using JavaScript!
*/



// The keys and notes variables store the piano keys.
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below
// step 1
function keyPlay(event) {
  event.target.style.backgroundColor = 'blue';
}


// Write a named function with event handler properties
function keyReturn(event) {
  event.target.style.backgroundColor = '';
}


function assignEvents(note) {
  note.onmousedown = keyPlay;
  note.onmouseup = keyReturn;

}

// Write a loop that runs the array elements through the function
notes.forEach(assignEvents);


// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function() {
  nextTwo.hidden = false;
  nextOne.hidden = true;

  // step 10
  document.getElementById('letter-note-five').innerHTML = 'D'

  document.getElementById('letter-note-six').innerHTML = 'C'
}


// Write anonymous event handler property and function for the second progress button
// step 11
nextTwo.onclick = function() {
  // step 12
  nextThree.hidden = false
  nextTwo.hidden = true

  // step 13
  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('word-six').innerHTML = 'FRI-';
  
  // step 14
  lastLyric.style.display = 'inline-block';

  // step 15
  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('letter-note-four').innerHTML = 'E';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('letter-note-six').innerHTML = 'B';
}

// Write anonymous event handler property and function for the third progress button
// step 16
nextThree.onclick = function() {
  // step 17
  startOver.hidden = false;
  nextThree.hidden = true;

  // step 18
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('word-six').innerHTML = 'YOU!';

  // step 19
  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';

  // step 20: This line of code fixes the piano and song from leaving 'END' at parts of the song where it should not be, by setting the display of the last lyric to none.
  lastLyric.style.display = 'none';

}


// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';


}
