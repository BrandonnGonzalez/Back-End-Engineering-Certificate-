/*
We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.
After we create these data structures in this project, feel free to challenge yourself to gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.
*/

// Step 1: A new object called 'team' that will hold all of the information in regarding teams and the games/scores.
const team = {
  // Step 2: Players array to store the players of each team's information
  // Step 3 and 4: Also populating the players and games array with some samples information
  _players: [
    {firstName: 'Brandon', lastName: 'Gonzalez', age: 21},
    {firstName: 'Zachary', lastName: 'Gonzalez', age: 22},
    {firstName: 'Paola', lastName: 'Mendizabal', age: 21}
  ],
  // Step 2: Games array to sore the games that are being played in the whole season.
  _games: [
    {opponent: 'Miami Heat', teamPoints: 40, opponentPoints: 20},
    {opponent: 'Los Angeles Lakers', teamPoints: 50, opponentPoints: 45},
    {opponent: 'Dallas Mavericks', teamPoints: 80, opponentPoints: 90}
  ],
  // Step 5: Getter method called players that will be able to retrieve the _players property, and inside of the getter we will return the _players property.
  get players(){
    return this._players;
  },
  // Step 6: Getter method called games that will be able to retrieve the _games property, and inside of the getter we will return the _games property.
  get games() {
    return this._games;
  },

  // Step 7: This method will be able to add new players and their information to the team object, given the parameters and the inputs
  addPlayer(newFirstName, newLastName, newAge){
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this.players.push(player);


  },

// Step 9: Adding in a new method called 'addGame' That takes in three parameters and also adding that game object to the team's _games array
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    }
    this.games.push(game);

  }
}; 

// Step 8: Trying out the new addPlayer method to make sure it runs as expected.
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

// Step 10: Testing the addGame method to make sure it runs as expected with example usages.
team.addGame('Titans', 100, 98);
console.log(team.games);



// CONSOLE OUTPUT:

/*

[
  { firstName: 'Brandon', lastName: 'Gonzalez', age: 21 },
  { firstName: 'Zachary', lastName: 'Gonzalez', age: 22 },
  { firstName: 'Paola', lastName: 'Mendizabal', age: 21 },
  { firstName: 'Bugs', lastName: 'Bunny', age: 76 }
]
[
  { opponent: 'Miami Heat', teamPoints: 40, opponentPoints: 20 },
  {
    opponent: 'Los Angeles Lakers',
    teamPoints: 50,
    opponentPoints: 45
  },
  { opponent: 'Dallas Mavericks', teamPoints: 80, opponentPoints: 90 },
  { opponent: 'Titans', teamPoints: 100, opponentPoints: 98 }
]


*/

