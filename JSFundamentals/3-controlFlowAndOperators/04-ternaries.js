let x = 8;

x > 0 ? console.log(`positive`) : console.log(`negative or zero`);

//conditional
if (x === 0) {
    console.log(`hello`);
} else if (x < 0) {
    console.log(`hi`);
} else {
    console.log(`goodbye`);
}

//ternary way

x === 0
    ? console.log(`hello`)
    : x < 0
    ? console.log(`hi`)
    : console.log(`goodbye`);

let age = 22;

/*if (age <= 17) {
    console.log(`sorry, you're too young to do anything.`);
} else if (age <= 20 ) {
    console.log(`yay, you can vote!`);
} else if (age <= 24) {
    console.log(`yay, you can drink!`);
} else {
    console.log(`yay, you can rent a car!`);
}*/

let y = 19;
y <= 17
    ? console.log(`sorry, you're too youg to do anything.`)
    : y <= 20
    ? console.log(`You can vote!`)
    : y <= 24
    ? console.log(`Yay, you can drink!`)
    : console.log(`Yay, you can rent a car!`);

for (fb % 3 == 0 && fb % 5 == 0) {
console.log(`FizzBuzz`);
} else if (fb % 3 == 0) {
    console.log (`Fizz`);
} else if (fb % 5 == 0) {
    console.log (`Buzz`);
} else console.log(fb);
    