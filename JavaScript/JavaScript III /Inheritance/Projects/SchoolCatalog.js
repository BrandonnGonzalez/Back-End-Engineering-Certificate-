/*
DOCUMENTATION TO JAVASCRIPT CLASSSES: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

Let’s put your knowledge of classes to the test by creating a digital school catalog for the New York City Department of Education. The Department of Education wants the catalog to hold quick reference material for each school in the city.

We need to create classes for primary and high schools. Because these classes share properties and methods, each will inherit from a parent School class. Our parent and three child classes have the following properties, getters, setters, and methods:

School
Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
Getters: all properties have getters
Setters: the numberOfStudents property has a setter
Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)
Primary
Includes everything in the School class, plus one additional property
Properties: pickupPolicy (string)
Middle
Does not include any additional properties or methods
High
Includes everything in the School class, plus one additional property
Properties: sportsTeams (array of strings)
If you’re looking for a challenge, create the constructor() and getters for the four classes above. Then, use the setter and methods specifications in steps five, six, and seven to finish the project.

*/

// the super keyword is going to be extremely useful in this project to avoid repeating code and also improve code readability.


class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;

  }

  get name () {
    return this._name;
  }
  
  get level () {
    return this._level;
  }

  get numberOfStudents () {
    return this._numberOfStudents;
  }

  // STEP 6
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const randomSub = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomSub];

  }

  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === 'number') {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }

}


class MiddleSchool extends School {
  constructor(name, numberOfStudents, averageTestScores) {
    super(name, 'middle', numberOfStudents);
    this._averageTestScores = averageTestScores;
  }

  get averageTestScores() {
    return this._averageTestScores;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;

  }

  get sportsTeams() {
    return this._sportsTeams; 
  }
}


class SchoolCatalog {
  constructor(level, schools) {
    this._level = level;
    this._schools = schools;
  }
  get level() {
    return this._level;
  }
  get schools() {
    return this._schools;
  }
  addSchools(newSchools) {
    this._schools.push(newSchools);
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();

School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new HighSchool('Al E. Smith', 415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);

const macDonalds = new MiddleSchool('Mac Donalds', 1000, 85);

macDonalds.quickFacts();


// end 
//
