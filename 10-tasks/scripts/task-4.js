// Task #4
console.log("Task #4");
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"

function mapBuilder(keysArray, valuesArray) {
    const newMap = new Map();
    keysArray.forEach((element, index) => {
        newMap.set(element, valuesArray[index]);
    });
    return newMap;
}