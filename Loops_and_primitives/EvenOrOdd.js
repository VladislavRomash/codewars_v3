const evenOrOdd = number => number % 2 === 0 || number === 0 ? 'Even' : 'Odd';

console.log(evenOrOdd(2))
console.log(evenOrOdd(7))
console.log(evenOrOdd(-42))
console.log(evenOrOdd(0))