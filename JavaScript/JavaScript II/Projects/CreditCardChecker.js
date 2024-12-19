/*
Project Goals
Context: The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. In this project, you have the role of a clerk who checks if credit cards are valid.
Every other clerk currently checks using pencil and paper, but you’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time. 
Unlike the other clerks, you can spend the rest of your time relaxing!
*/


// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
function validateCred(arr) {
  let sum = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    let currentValue = arr[i];
    
    // Double every other digit starting from the second-to-last
    if ((arr.length - 1 - i) % 2 === 1) {
      currentValue *= 2;

      // Subtract 9 if the doubled value is greater than 9
      if (currentValue > 9) {
        currentValue -= 9;
      }
    }

    // Add the current value to the sum
    sum += currentValue;
  }

  // Check if the sum modulo 10 is 0
  if (sum % 10 === 0) {
    return 'The number is valid';
  } else {
    return 'It is invalid';
  }
}

// Testing with valid1
console.log(validateCred(valid1)); // The number is valid


// step 4
// Validate credit card function
function validateCred(arr) {
  let sum = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    let currentValue = arr[i];

    if ((arr.length - 1 - i) % 2 === 1) {
      currentValue *= 2;

      if (currentValue > 9) {
        currentValue -= 9;
      }
    }

    sum += currentValue;
  }

  return sum % 10 === 0;
}

// Find invalid cards function
function findInvalidCards(cards) {
  const invalidCards = [];

  for (let i = 0; i < cards.length; i++) {
    if (!validateCred(cards[i])) { // Pass the card array to validateCred
      invalidCards.push(cards[i]);
    }
  }

  return invalidCards; // returns the array of all of the invalidCards ONCE the for loop is done.
}

// Test with the provided dataset
const invalidCards = findInvalidCards(batch);
console.log(invalidCards); // returns about 8 invalid card numbers in a nested array.


// Step 5
function idInvalidCardCompanies(invalidBatch) {
  const companies = new Set(); // Use a Set to avoid duplicates
  for (let i = 0; i < invalidBatch.length; i++) {
    // Using a switch and cases instead of multiple if-else for readbility and cleanliness.


    switch (invalidBatch[i][0]) { // the beginning of the switch is the condition, so it means, for every first element in the invalidBatch array...
      case 3: // If the first element is equal to 3...
        companies.add('AMEX (American Express)'); // condition is met so the criteria gets added into the set, no duplicates
        break; // breaks and goes into the next iteration
      case 4: // If the first element is equal to 4...
        companies.add('Visa');
        break;
      case 5: // If the first element is equal to 5...
        companies.add('Mastercard');
        break;
      case 6: // If the first element is equal to 6...
        companies.add('Discover');
        break;
      default:
        return 'company not found';
        // Optionally handle or log unknown company numbers
        break;
    }
  }
  return Array.from(companies); // Convert the set back to an array before returning
}

// Example usage:
console.log(idInvalidCardCompanies(batch)); 
// will return the set converted into an array of: [ 'Visa', 'Mastercard', 'AMEX (American Express)', 'Discover' ]
// * NO DUPLICATES *

