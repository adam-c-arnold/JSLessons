let weather = 50;

if (weather === 50) {
    console.log ('no jacket needed');
} else {
    console.log ('wear a jacket');
}


let name = 'ZAchARy';

if(name[0] === name[0].toUpperCase()) {
    let fixedString = name[0] + name.slice(1).toLowerCase();
    console.log(fixedString)

} else {
    let firstLetter = name[0].toUpperCase();
    let restOfName = name.slice(1).toLowerCase();
    let fullName = firstLetter + restOfName;
    console.log(fullName);
}

//IF block
let age = 22;

if (age <= 17) {
    console.log(`sorry, you're too young to do anything.`);
} else if (age <= 20 ) {
    console.log(`yay, you can vote!`);
} else if (age <= 24) {
    console.log(`yay, you can drink!`);
} else {
    console.log(`yay, you can rent a car!`);
}



