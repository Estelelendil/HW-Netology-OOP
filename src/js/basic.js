class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    if (typeof this.name !== 'string' || this.name.length > 10 || this.name.length < 2) {
      throw new Error('Имя персонажа введено неверно');
    }
    if (this.type !== 'Bowman' || 'Swordsman' || 'Magician' || 'Daemon' || 'Undead' || 'Zombie') {
      throw new Error('Тип персонажа введен неверно');
    }
  }
  health = 100;
  level = 1;
  attack;
  defence;
}

export class Bowman extends Character {
  constructor(name) {
    type = 'Bowman';
    super(name, type, health, level);
    attach = 25;
    defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name) {
    type = 'Swordsman';
    super(name, type, health, level);
    attach = 40;
    defence = 10;
  }
}

export class Magician extends Character {
  constructor(name) {
    type = 'Magician';
    super(name, type, health, level);
    attach = 10;
    defence = 40;
  }
}

export class Undead extends Character {
  constructor(name) {
    type = 'Undead';
    super(name, type, health, level);
    attach = 25;
    defence = 25;
  }
}

export class Zombie extends Character {
  constructor(name) {
    type = 'Zombie';
    super(name, type, health, level);
    attach = 40;
    defence = 10;
  }
}

export class Daemon extends Character {
  constructor(name) {
    type = 'Daemon';
    super(name, type, health, level);
    attach = 10;
    defence = 40;
  }
}
