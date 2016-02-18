import test from 'ava';
import {rules, firstRow, generator} from './';

test('should have 8 rules', t => {
  t.is(rules.size, 8);
});

test('should have the correct first row', t => {
  t.is(firstRow, '11011');
});

test('should have a generator function ', t => {
  t.is(typeof generator, 'function');
});

test('should generate correct second row', t => {
  t.is(generator(rules, firstRow), '10011');
});
