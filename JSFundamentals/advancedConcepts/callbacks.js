let outer = cb => {
    console.log(`before the callback`);
    cb();
}
let inner = () => {
    console.log(`I am the callback`);
}


outer(inner);