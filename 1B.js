const arr = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]

function countDuplicateValue(array) {
    array.sort()
    let newArr = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) {
            if (newArr[newArr.length - 1] !== array[i]) {
                newArr.push(array[i])
            }
        }
    }
    return newArr.length;
}

console.log(countDuplicateValue(arr));