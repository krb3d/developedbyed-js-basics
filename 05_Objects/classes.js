class Friend {
  constructor(life, name, level) {
    this.life = life;
    this.name = name;
    this.level = level;
  }
  getInfo() {
    console.log(this.name, this.life, this.level);
  }
  attack() {
    console.log(`${this.name} has attacked!`);
  }
}

const frog = new Friend(10, "Fro", 2);
console.log(frog);

class Mage extends Friend {
  constructor(life, name, level, color, spell) {
    super(life, name, level); // this = Mage
    this.color = color;
    this.spell = spell;
  }
  doSpell() {
    console.log(`${this.name} do ${this.spell} spell!`);
  }
}

const newMage = new Mage(100, "Goldy", 5, "gold", "Blitz");
newMage.doSpell(); // Goldy do Blitz spell!
newMage.attack(); // Goldy has attacked!
