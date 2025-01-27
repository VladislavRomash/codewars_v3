function isLeapYear(year) {
    let centuryTest = year.toString().slice(2) === '00'
    return centuryTest ? year % 400 === 0 : year % 4 === 0
}

console.log(isLeapYear(2020));
console.log(isLeapYear(2000));
console.log(isLeapYear(2015));
console.log(isLeapYear(2100));