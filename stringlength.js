function stringLength(string) {
    let stringCount = string.length;
    if(stringCount > 0 && stringCount < 11) {
        return stringCount;
    }else{
        return 'invalid string';
    }
}

module.exports = stringLength;