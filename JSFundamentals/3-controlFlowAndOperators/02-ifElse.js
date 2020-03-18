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


