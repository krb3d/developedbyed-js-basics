function Enemy(life, name, level) {
  this.life = life;
  this.name = name;
  this.level = level;
}

Enemy.prototype.getInfo = function () {
  console.log(this.name, this.life, this.level);
};

Enemy.prototype.attack = function () {
  console.log(`${this.name} has attacked!`);
};

function Dragon(life, name, level, color, spell) {
  Enemy.call(this, life, name, level); // this = Dragon
  this.color = color;
  this.spell = spell;
}
// Inherit Prototype
Dragon.prototype = Object.create(Enemy.prototype); // now prototype is object with Enemy prototype - chain of prototypes

Dragon.prototype.doSpell = function () {
  console.log(`${this.name} do ${this.spell} spell!`);
};

const newDragon = new Dragon(100, "Drago", 5, "red", "Blast");
newDragon.doSpell(); // Drago do Blast spell!
newDragon.attack(); // Drago has attacked!
