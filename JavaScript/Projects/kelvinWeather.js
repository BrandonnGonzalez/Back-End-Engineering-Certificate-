
/*
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.
Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.
With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.
*/



// constant variabled named kelvin, holding the number 293
const kelvin = 293;

const celsius = kelvin - 273;

let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`); // Outputs: The temperature is 68 degrees Fahrenheit.

let newton = celsius * (33/100)
newton = Math.floor(newton)
console.log(`The temperature is ${newton} newtons.`) // Output: The temperature is 6 newtons.
