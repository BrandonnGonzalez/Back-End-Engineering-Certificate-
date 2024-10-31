function getSleepHours(day) {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 8;
  } else if (day === 'wednesday') {
    return 8;
  } else if (day === 'thursday') { 
    return 8;
  } else if (day === 'friday') {
    return 8;
  } else if (day === 'saturday') {
    return 8;
  } else if (day === 'sunday') {
    return 10;
  } else {
    console.log("Error")
  }
}

function getActualSleepHours() {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

}

function getIdealSleepHours() {
  let idealHours = 8
  return idealHours *= 7
}

function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours < idealSleepHours) {
    console.log("You are under your sleep goal by: " + (idealSleepHours - actualSleepHours) + "hours");

  } else if (actualSleepHours > idealSleepHours) {
    console.log("The user got more sleep then needed, by " + (actualSleepHours - idealSleepHours) + " " + "hours")
  } else if (actualSleepHours === idealSleepHours) {
    console.log("you are sleeping the exact amount that you wanted to!");
  }
}

console.log(getSleepHours('monday'));
console.log(getActualSleepHours());
console.log(getIdealSleepHours());

calculateSleepDebt();




