const string = 'Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.'

function countWords(str) {
    const arr = str.split(' ');

    return arr.filter(word => word !== '').length;
}

console.log(countWords(string));
