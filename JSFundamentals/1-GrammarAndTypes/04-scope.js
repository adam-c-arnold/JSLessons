var x = 12;

function scope() {
    var x = 33;
    if(true) {
        let x = 45
        console.log(x);

    }
    console.log(x);
}
scope();
console.log(x);
// 33 12
//because the 33 is local and only available within the function
//when x is called again it uses the global variable of x = 12
