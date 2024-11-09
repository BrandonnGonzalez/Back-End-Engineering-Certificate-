// step 1: Object creation
const menu = {
  // step 2 and 3: Property creation
  _meal: '',
  _price: 0,
  // step 5
  set meal(mealToCheck) {
    // step 6
    if (typeof mealToCheck === 'string') {
      return this._meal = mealToCheck;
    }
  },
  // step 7
  set price(priceToCheck){
    if(typeof priceToCheck === 'number'){
      return this._price = priceToCheck;
    } 
  },
  // step 10
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for $${this._price}!`;
    } else {
      return 'Meal or price was not set correctly!';
    }
  }
};
// step 8 & 11
menu.meal = 'pizza';
menu.price = 8;

// step 11
// Parenthesis is not needed when calling a setter or getter on an object.
console.log(menu.todaysSpecial);

/* Step 4
menu._menu = 4;
menu._price = '40';
console.log(menu); // outputs: {_meal: '', _price: '40', _menu: 4 }
*/


// Project took 20 minutes to complete
