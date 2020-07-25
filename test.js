'use strict'

const test = require('tape')
const ms = require('.')

test('ms(string)', function (t) {
  t.is(ms('1s'), 1000)
  t.end()
})

test('ms(number)', function (t) {
  t.is(ms(5), 5)
  t.is(ms(Infinity), Infinity)
  t.is(ms(-Infinity), -Infinity)
  t.end()
})

test('ms(invalid)', function (t) {
  t.throws(() => ms(''), /^TypeError: Argument must be/, 'empty string')
  t.throws(() => ms(), /^TypeError: Argument must be/, 'undefined')
  t.throws(() => ms(undefined), /^TypeError: Argument must be/, 'undefined')
  t.throws(() => ms(null), /^TypeError: Argument must be/, 'null')
  t.throws(() => ms([]), /^TypeError: Argument must be/, 'array')
  t.throws(() => ms({}), /^TypeError: Argument must be/, 'object')
  t.throws(() => ms(NaN), /^TypeError: Argument must be/, 'NaN')
  t.throws(() => ms('☃'), /^TypeError: Argument must be/, 'unicode')
  t.throws(() => ms('10-.5'), /^TypeError: Argument must be/, 'invalid number')
  t.throws(() => ms('a10'), /^TypeError: Argument must be/, 'invalid number')
  t.throws(() => ms('ms 10'), /^TypeError: Argument must be/, 'invalid number')
  t.throws(() => ms('4invalid'), /^TypeError: Argument must be/, 'invalid unit')
  t.throws(() => ms('4 invalid'), /^TypeError: Argument must be/, 'invalid unit')
  t.end()
})

test('custom error message', function (t) {
  t.throws(() => ms('', 'Test'), /^TypeError: Test must be/)
  t.end()
})
