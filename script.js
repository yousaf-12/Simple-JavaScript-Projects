// =================
//  BMI Calculator
// =================

// input from user
const name = prompt("Enter your full name!");
const heightCm = Number(prompt("Enter your height in Cm!"));
const weight = Number(prompt("Enter your weight!"));

// calculate a bmi value
const heightM = heightCm / 100;
const bmi = weight / (heightM ** 2);

// show result of BMI
console.log(`My name is ${name} and BMI is ${bmi.toFixed(1)}`);

//=====================
// Temperatur converter
// =====================
const celcius = number(prompt("Enter a number of Celcius!"));
const fahrenheit = (celcius * 9) / 5 + 32;

console.log(`${celcius} = ${fahrenheit.toFixed(1)}°F`);

// ==================
//  Bill Calculator
// ==================

const productName = prompt("Enter Product Name!");
const quantity = Number(prompt("Enter quantity!"));
const price = Number(prompt("Enter Price!"));
const taxpercent = Number(propt("Enter product tax!"));

const subtotal = quantity * price;
const taxAmount = (subtotal * taxpercent) / 100;
const totalAmount = subtotal + taxAmount;

console.log(`${productName}`);
console.log(`${quantity}`);
console.log(`${price}`);
console.log(`This Product taxpercent is equal to: ${taxAmount}`);
console.log(`${totalAmount}`);

// =====================
// Number Guessing Game
// =====================

const secret = Math.floor(Math.random() * 10) + 1;

for (let tries = 1; tries <= 5; tries++) {
    const guess = Number(prompt(`Your tries${tries}/5: guess a number b/w 1 to 10`));
    if (guess === secret) {
        alert(`In ${tries} tries you are win!🙋‍♀️`);
        break;
    }
    alert(guess > secret ? "More" : "Low");

    if (tries === 5) alert(`number of tries is ${tries}: Game Over🙌 Number is ${secret}`);

}