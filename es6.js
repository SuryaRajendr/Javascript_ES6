console.log("Ayyappa")
const add = (a,b,c) => {
    return a+b+c;
}
const numbers = [1,2,3,4]
console.log(add(...numbers))
console.log(`sum of numbers ${numbers}`)

// generator functionif astric symbol presents
function * generator(i) {
    yield i;
    yield i+10;
}

const gen = generator(10)

console.log(gen.next().value)

console.log(gen.next().value)