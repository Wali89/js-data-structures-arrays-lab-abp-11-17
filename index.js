// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"] ;


function destructivelyAppendDriver(name) {
  drivers.push (name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift (name);
}

function removeLastDriver(name) {
  drivers.pop (drivers.length + 1);
}
