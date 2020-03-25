// ifelse
let fb = 6;

if(fb % 3 == 0 && fb % 5 == 0) {
    console.log(`FizzBuzz`);
} else if (fb % 3 == 0) {
    console.log(`Fizz`);
} else if (fb % 5 == 0) {
    console.log(`Buzz`);
}
//switch
switch (true) {
    case (fb % 3 == 0 && fb % 5 == 0):
        console.log(`FizzBuzz`);
        break;
        case (fb % 5 == 0):
            break;
            case (fb % 3 == 0):
                break;
                default:
                    console.log(fb);
}
//ternary
fb % 15 == 0 ? console.log(`FizzBuzz`) 
: fb % 5 == 0 
? console.log(`Buzz`)
: fb % 3== 0 
? console.log(`Fizz`)
: console.log(fb);