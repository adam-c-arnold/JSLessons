let student = {
    name: `Peter`,
    awesome: true,
    degree: `JavaScript`,
    week: 1
}

for (item in student) {
    console.log(`Key =>`, item)
    console.log(`Value =>`, student[item])
}

let catArray = [`siamese`, `tabby`, `feral`, `sphynx`, `lazy`];

for (cat in catArray) {
    console.log(catArray[cat]);
}

let aCat = catArray[2]
//A ForIn Loop allows you to grab the keys in an object, or the index in an array.

let studentName = `dOllPH`;
let newName = ``;

for (char in studentName) {
    if (char > 0) {
        newName = newName + studentName[char].toLowerCase();

    } else {
        newName = newName + studentName[char].toUpperCase();

    }
}

console.log(newName);