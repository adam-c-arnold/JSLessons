let friend = `Kenn`;

switch (friend) {
    case `Tom`:
        console.log(`Hey Tom, wanna go rock climbing?`);
        break;
    case `Kenn`:
        console.log(`Hey Kenn, wanna play Catan?`);
        break;
    case `Carolyn`:
        console.log(`Hey Carolyn, when are we playing D&D?`);
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`);
}

//If you don't include break, switch statement will fire all cases after the first true case even if they aren't true

let menuItem = `ortolan`;
switch (menuItem) {
    case `pie`:
        console.log(`Pie, pie, me oh my!`);
        break;
    case `cake`:
        console.log(`Cake is great!`);
        break;
    case `ice cream`:
        console.log(`I scream for ice cream!`);
        break;
    default:
        console.log(`Sorry, but ${menuItem} is not on the menu.`);
}

//Multiple conditions

let yep = 4;

switch (true) {
    case (yep < 0 && yep > 10 - 10):
        console.log(`worked`);
        break;
    case yep > 0:
        console.log(`worked`);
        break;
    default:
        console.log(`didn't work`);
}


