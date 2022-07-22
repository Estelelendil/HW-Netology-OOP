import {
  Swordsman, Bowman, Magician, Daemon, Undead, Zombie,
} from './js/basic';

const persDaemon = new Daemon('Larry');

const persSwordsman = new Swordsman('Chack');
const persBowman = new Bowman('Susanna');
const persUndead = new Undead('Shon');
const persMagician = new Magician('Din');
const persZombie = new Zombie('Will');

console.log(persDaemon, persBowman, persMagician, persSwordsman, persUndead, persZombie);
