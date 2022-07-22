/* eslint-disable no-unused-vars */
import Character, {
  Swordsman, Bowman, Magician, Daemon, Undead, Zombie,
} from '../basic';
import persons from '../../index';

// const persDaemon = new Daemon('Larry');
// const persSwordsman = new Swordsman('Chack');
// const persBowman = new Bowman('Susanna');
// const persUndead = new Undead('Shon');
// const persMagician = new Magician('Din');
// const persZombie = new Zombie('Will');

test('every daughter-object depends from parents class', () => {
  const result = true;
  expect(result).toBe(persons.every((item) => item instanceof Character));
});

test('exemplar persons Daemon corresponce class constructor', () => {
  const result = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Larry',
    type: 'Daemon',
  };
  const pers = new Daemon('Larry');
  expect(result).toEqual(pers);
});

test('exemplar persons Bowman corresponce class constructor', () => {
  const result = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Susanna',
    type: 'Bowman',
  };
  const pers = new Bowman('Susanna');
  expect(result).toEqual(pers);
});

test('exemplar persons Magician corresponce class constructor', () => {
  const result = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Din',
    type: 'Magician',
  };
  const pers = new Magician('Din');
  expect(result).toEqual(pers);
});

test('exemplar persons Swordsman corresponce class constructor', () => {
  const result = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Chack',
    type: 'Swordsman',
  };
  const pers = new Swordsman('Chack');
  expect(result).toEqual(pers);
});

test('exemplar persons Undead corresponce class constructor', () => {
  const result = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Shon',
    type: 'Undead',
  };
  const pers = new Undead('Shon');
  expect(result).toEqual(pers);
});

test('exemplar persons Zombie corresponce class constructor', () => {
  const result = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Will',
    type: 'Zombie',
  };
  const pers = new Zombie('Will');
  expect(result).toEqual(pers);
});

test('error name when create person', () => {
  expect(() => new Magician('N')).toThrow('');
});

test('error type when create person', () => {
  expect(() => new Character('Name', 'Magician1')).toThrow('');
});
