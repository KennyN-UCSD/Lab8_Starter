// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Phone numbers
test('valid phone number: 1-(800)-588-2300 - empire', () => {
    expect(functions.isPhoneNumber('1-800-588-2300')).toBe(true);
});

test('valid phone number: (619)-867-5309 - jennys number', () => {
    expect(functions.isPhoneNumber('619-867-5309')).toBe(true);
});

test('invalid phone number: (123)-456-989 - insufficient characters', () => {
    expect(functions.isPhoneNumber('123-456-789')).toBe(false);
});

test('invalid phone number: (abc)-def-ghij - alphabet', () => {
    expect(functions.isPhoneNumber('abc-def-ghij')).toBe(false);
});

// E-mails
test('valid e-mail: johnsmith123@gmail.com - generic google', () => {
    expect(functions.isEmail('johnsmith123@gmail.com')).toBe(true);
});

test('valid e-mail: johnsmith123@asgygawg.xyz - generic random site', () => {
    expect(functions.isEmail('johnsmith123@asgygawg.xyz')).toBe(true);
});

test('invalid e-mail: johnsmith123@ - no site', () => {
    expect(functions.isEmail('johnsmith123@')).toBe(false);
});

test('invalid e-mail: @google.com - only site', () => {
    expect(functions.isEmail('@google.com')).toBe(false);
});

// Strong Passwords
test('valid strong password: ilovecats - generic password of 9 length', () => {
    expect(functions.isStrongPassword('ilovedogs')).toBe(true);
});

test('valid strong password: j_1Av_a5c_R1p_TT - generic password of varying symbols and 15 length', () => {
    expect(functions.isStrongPassword('j_1Av_a5c_R1p_T')).toBe(true);
});

test('invalid strong password: !@#$%^&*() - invalid characters', () => {
    expect(functions.isStrongPassword('!@#$%^&*()')).toBe(false);
});

test('invalid strong password: ABCDEFGHIJKLMNOPQRSTUVWXYZ - generic password of 26 length', () => {
    expect(functions.isStrongPassword('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe(false);
});

// Dates
test('valid date: 1/1/2000 - generic date with 1 digit dates', () => {
    expect(functions.isDate('1/1/2000')).toBe(true);
});

test('valid date: 11/11/1918 - generic date with two digit dates', () => {
    expect(functions.isDate('11/11/1918')).toBe(true);
});

test('invalid date: 22/333/55555 - digits too long', () => {
    expect(functions.isDate('22/333/55555')).toBe(false);
});

test('invalid date: 11111918 - no /', () => {
    expect(functions.isDate('11111918')).toBe(false);
});

// Hex colors
test('valid hex color: #A12 - 3 character hex', () => {
    expect(functions.isHexColor('#A12')).toBe(true);
});

test('valid hex color: #FA0B23 - 6 character hex, no hashtag', () => {
    expect(functions.isHexColor('FA0B23')).toBe(true);
});

test('invalid hex color: #@B3!H^ - invalid characters', () => {
    expect(functions.isHexColor('#@B3!H^')).toBe(false);
});

test('invalid hex color: #A03D2P1A - invalid number of characters', () => {
    expect(functions.isHexColor('#A03D2P1A ')).toBe(false);
});
