// return masked string
function maskify(cc) {
    return cc.length > 4 ? '#'.repeat(cc.slice(0, cc.length - 4).length).concat(cc.slice(-4)) : cc
}

console.log(maskify('4556364607935616'))
console.log(maskify('1'))
console.log(maskify('11111'))