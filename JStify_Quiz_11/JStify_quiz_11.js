const arr1 = [3, [8, [5, null, null], null], [7, null, null]];

// Realization with recursion
// masured with console.time on quiz arr1 data ~ 0.135 ms
const isValueExistInTreeRecursion = (arr, target) => {
    for (let value of Object.values(arr)) {
        if (typeof value === 'object' && value !== null) {
            return isValueExistInTree(value, target)
        } else if (value === target) {
            return true;
        }
    }
    return false;
};

// Realization with string utils, fastest way
// masured with console.time on quiz arr1 data ~ 0.01ms
const isValueExistInTree = (arr, target) => arr.toString().includes(target);

/*
console.time("isValueExistInTreeRecursion");
isValueExistInTreeRecursion(arr1, 5);
console.timeEnd("isValueExistInTreeRecursion"); // -> ~ 0.135 ms

console.time("isValueExistInTree");
isValueExistInTree(arr1, 5);
console.timeEnd("isValueExistInTree"); // -> ~ 0.01ms

console.log(isValueExistInTree(arr1, 5)); // true
console.log(isValueExistInTree(arr1, 9)); // false
console.log(isValueExistInTree(arr1, 51)); // false
*/