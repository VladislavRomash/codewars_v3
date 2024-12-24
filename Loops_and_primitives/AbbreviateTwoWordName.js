const abbrevName = (name) => `${name[0]}.${name.split(' ')[1][0]}`.toUpperCase()

console.log(abbrevName("Sam Harris"))
console.log(abbrevName("Patrick Feenan"))
console.log(abbrevName("Evan Cole"))
console.log(abbrevName("P Favuzzi"))