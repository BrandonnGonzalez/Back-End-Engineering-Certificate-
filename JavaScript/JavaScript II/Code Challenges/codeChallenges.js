// Problem 1
//



// Need to upload


// Problem 2

// Need to upload and finish the rest


// Problem 3
/*

*/



// Problem 14
// Write your code here:

function dogFactory(name, breed, weight) {
  return {
    _name: name,
  _breed: breed,
  _weight: weight,

  get name() {
    return this._name;
  },
  get breed() {
    return this._breed;
  }, 
  get weight() {
    return this._weight;
  },
  set name(newName) {
    return this._name = newName;
  },
  set breed(newBreed) {
    return this._breed = newBreed;
  },
  set weight(newWeight) {
    return this._weight = newWeight;
  },

  bark() {
    return 'ruff! ruff!'
  },
  eatTooManyTreats() {
    this._weight++
  }
  }

}

//



