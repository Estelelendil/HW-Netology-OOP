import {
  Swordsman, Bowman, Magician, Daemon, Undead, Zombie,
} from './js/basic';

const persons = [];
const persDaemon = new Daemon('Larry');
const persSwordsman = new Swordsman('Chack');
const persBowman = new Bowman('Susanna');
const persUndead = new Undead('Shon');
const persMagician = new Magician('Din');
const persZombie = new Zombie('Will');
persons.push(persBowman, persDaemon, persMagician, persUndead, persSwordsman, persZombie);
export default persons;
// console.log(persons);
