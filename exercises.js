const isCapicua = (word) => {
    const wordArray = word.split('');
    const wordRev = [...wordArray].reverse();

    for(let i = 0, ii = word.lenght; i < ii; i++) {
        if(wordArray[i] !== wordRev[i]) {
            return false;
        }
    }
    return true;
}

console.log(isCapicua('arara'));
console.log(isCapicua('barara'));
