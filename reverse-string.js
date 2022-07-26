function reverseString(string) {
    const stringReverse = string.split('').reverse('').join('');
    return stringReverse;
}

module.exports = reverseString;