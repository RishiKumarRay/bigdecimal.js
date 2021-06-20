const { BigDecimal } = require('../lib/bigdecimal');
module.exports = [
    [BigDecimal.fromValue('12.345'), undefined],
    [BigDecimal.fromValue('12.345'), null],
    [BigDecimal.fromValue('12.345'), NaN],
    [BigDecimal.fromValue('12.345'), 'NaN'],
    [BigDecimal.fromValue('12.345'), []],
    [BigDecimal.fromValue('12.345'), {}],
    [BigDecimal.fromValue('12.345'), ''],
    [BigDecimal.fromValue('12.345'), ' '],
    [BigDecimal.fromValue('12.345'), 'hello'],
    [BigDecimal.fromValue('12.345'), '\t'],
    [BigDecimal.fromValue('12.345'), new Date()],
    [BigDecimal.fromValue('12.345'), new RegExp()],
    [BigDecimal.fromValue('12.345'), function () {
    }],
    [BigDecimal.fromValue('12.345'), ' 0.1'],
    [BigDecimal.fromValue('12.345'), '7.5 '],
    [BigDecimal.fromValue('12.345'), ' +1.2'],
    [BigDecimal.fromValue('12.345'), ' 0 '],
    [BigDecimal.fromValue('12.345'), '- 99'],
    [BigDecimal.fromValue('12.345'), '9.9.9'],
    [BigDecimal.fromValue('12.345'), '10.1.0'],
    [BigDecimal.fromValue('12.345'), '0x16'],
    [BigDecimal.fromValue('12.345'), '1e'],
    [BigDecimal.fromValue('12.345'), '8 e'],
    [BigDecimal.fromValue('12.345'), '77-e'],
    [BigDecimal.fromValue('12.345'), '123e.0'],
    [BigDecimal.fromValue('12.345'), '4e1.'],
    [BigDecimal.fromValue('12.345'), Infinity],
    [BigDecimal.fromValue('12.345'), '-Infinity'],
];
