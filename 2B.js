const str = 'Berapa u(mur minimal[untuk!mengurus ktp ?'

function countWords(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|<>\/~]/;
    const arr = str.split(' ');
    const newArr = [];

    for (i = 0; i < str.length; i++) {
        if (specialChars.test(arr[i]))
            newArr.push(arr[i])
    }

    let wordsLength = arr.length - newArr.length;

    return wordsLength
}

console.log(countWords(str));
