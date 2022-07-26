const stringLength = require("./stringlength.js");

test('the string \'esternocleidomastoideo\' is and invalid string', () => {
    expect (stringLength('esternocleidomastoideo')).toEqual('invalid string');
});

test('the string \'jest \'has 4 character', () => {
    expect (stringLength('jest')).toBe(4);
});