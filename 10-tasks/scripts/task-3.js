// Task #3
console.log("Task #3");
function mul(...array) {
    const onlyNumbers = array.filter(element => typeof element === 'number');
    if(onlyNumbers.length ===0) return 0;
    const result = onlyNumbers.reduce((accumulator, element) => {
        if(typeof element === 'number') {
            return accumulator *= element;
        }
        return accumulator
    });
    return typeof result !== 'number' ? 0 : result;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
console.log(mul(1, "str", false, true)); // 1
console.log(mul("str", 1, false, true)); // 1
console.log(mul("str", 0, false, true)); // 0
console.log(mul(4, 0, 5, true,1)); // 0