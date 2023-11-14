test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3);
    const expected = 3 * 1.07;
    expect(fromEuroToDollar(3)).toBe(3.21); 
});

test("One Dollar should be 151.08 Yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const Yen = fromDollarToYen(3);
    const expected = 3 * 151.08;
    expect(fromDollarToYen(3)).toBe(453.24);
});

test("One Yen should be 0.0054 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(3);
    const expected = 3 * 0.0054;
    expect(fromYenToPound(3)).toBe(0.0162);
});