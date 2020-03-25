let myList = [`thing1`, `thing2`, `thing3`, [1, { key1: `abc`}, 4]];

myList[3][1].key1;

let colors = [];

console.log(colors);
colors.push(`red`);
console.log(colors);
colors.push(`purple`);
console.log(colors);

//items removed
let removed = colors.pop();
console.log (colors);
console.log(removed);

let orders = [`Mary`, `Tim`, `Greg`, `Dolph`, `Ashley`];

orders.splice(1, 1, `Donovan`);
orders.splice(3, 0, `Adam`);
console.log(orders);

//the zero in second console.log is (removes number of items number) removes evrything 
//after where name is inserted

let shifted = orders.shift();
console.log(orders);
console.log(shifted);

orders.unshift();
console.log(orders);

let foods = [`Pecan Pie`, `Shrimp`, `Quesadilla`, `HotDog`, `Chana Masala`];
//all the following are the same
/*for (let i = 0; i < foods.length; i++) {
    console.log(foods[i]);
}

for (i in foods) {
    console.log(foods[i]);
}

for (food of foods) {
    console.log(food);
}*/

foods.forEach(food => console.log(food));
//behind the scenes there is a loop that runs for the declared array
//foods.forEach(food => null);
//console.log(foods);

foods.forEach( (x, y, z) => console.log(y, x, z));

console.log(typeof foods);
console.log(foods instanceof Array);

console.log( typeof 3 == "number")



//Challenge



 let x = [4, 3, 2, 1, 0]

 let reverseArray = (toReverse) => {
     if (toReverse instanceof Array) {
         toReverse.reverse();

     }
 }

 reverseArray(x);
 x.forEach(input => console.log(input));



 console.log(`before: `)
x.forEach(input => console.log(input))
 if (x instanceof Array) {
     x = x.reverse();
    
 }

 console.log(`after: `);
 x.forEach(input => console.log(input))

 


