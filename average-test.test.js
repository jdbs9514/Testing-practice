const Store = require('./average-test.js');

describe('my store', () => {
    test('is full', () => {
        const trial = new Store();
        expect(trial.full).toEqual(true);
    });

    test('is empty', () => {
        const trial = new Store()
        expect(trial.empty).toEqual(false);
    });
});