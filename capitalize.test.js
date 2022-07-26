const capitalize = require('./capitalize.js');

test('returns the string \'steelheart\'with the first character capitalized', () => {
    expect(capitalize('steelheart')).toBe('Steelheart');
});