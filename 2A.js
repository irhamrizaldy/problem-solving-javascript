const string = 'Saat meng*ecat tembok, Agung dib_antu oleh Raihan.'

function countWords(str) {
    const arr = str.split(' ');

    return arr.filter(word => word !== '').length;
}

console.log(countWords(string));
