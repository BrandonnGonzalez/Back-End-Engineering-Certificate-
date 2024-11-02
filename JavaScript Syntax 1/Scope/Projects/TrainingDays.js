/*
As a seasoned athlete, one of your favorite activities is running marathons. You use a service called Training Days that sends you a message for the event you signed up for and the days you have left to train.

Since you also code, Training Days has asked you to help them solve a problem: The program currently uses the wrong scope for its variables. They know this can be troublesome as their service evolves. 
In this project you will make Training Days more maintainable and less error-prone by fixing variable scopes.
*/

//


let name = ""

/* This function has the purpose of generating a random event, depending on the random number that is calculated. If the random number 0 is generated, then thwe function will return the event being a "Marathon", and so on and so forth.
*/

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

/*
This function will generate the amount of training days the athlete will need in order to prepare for their event depending on what type of event it is. If the event is a marathon, the athlete will have to train for 50 days. So on and so forth.
*/

// The scope of `days` is too tight 
const getTrainingDays = event => {
  let days = ""

  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};

// This logEvent function prints the athletes name and their event.
// The scope of `name` is too tight 
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

// This logTime function prints the athlete's name and their amount of time needed to train.
const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

// event is set to the getrandomevent function
const event = getRandEvent();
// The amount of days needed to train is set to the getTrainingdays function where it uses the event input to figure that out.
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent("Brandon", event);
logTime("Brandon", days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
// Step 9 
logEvent(name2, event2);
logTime(name2, days2);

