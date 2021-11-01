function isCapicua(word) {
    let wordArray = word.split('');
    let wordRev = [...wordArray].reverse();

    for(i = 0; i < word.length; i++) {
        if(wordArray[i] !== wordRev[i]) {
            return false;
        }
    }
    return true;
    // console.log({wordArray, wordRev});
    // console.log([...wordArray]);
}

console.log(isCapicua('arara'));
console.log(isCapicua('barara'));
