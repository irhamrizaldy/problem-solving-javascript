const string = 'Berapa u(mur minimal[untuk!mengurus ktp ?'

function countWords(str) {
    const arr = str.split(' ');

    return arr.filter(word => word !== '').length;
}

console.log(countWords(string));
