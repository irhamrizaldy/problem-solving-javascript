const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20]

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