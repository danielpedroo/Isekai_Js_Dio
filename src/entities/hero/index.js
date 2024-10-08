//package USER_INPUT
const readline = require("readline-sync");

class Hero {
  constructor(name, level, type) {
    this.name = name;
    this.level = level;
    this.type = type;
  }

  attack(type, weapon) {
    return `${this.name} (${type}) atacou usando ${weapon}!`;
  }
}

const Type = {
  WIZARD: "Wizard",
  WARRIOR: "Warrior",
  MONK: "Monk",
  NINJA: "Ninja",
};

let exit = false;

do {
  console.log("Escolha seu Heroi:");
  console.log("----------------");

  console.log("1 - Wizard");
  console.log("2 - Warrior");
  console.log("3 - Monk");
  console.log("4 - Ninja");

  let heroChoice = parseInt(readline.question("Escolha um numero: "));

  switch (heroChoice) {
    case 1:
      console.log("------------------------------------------------");
      let heroMagic = new Hero("Algord", 571, Type.WIZARD);
      console.log(heroMagic.attack(heroMagic.type, "Magia"));
      console.log("------------------------------------------------");
      break;
    case 2:
      console.log("------------------------------------------------");
      let heroSword = new Hero("Draxius", 693, Type.WARRIOR);
      console.log(heroSword.attack(heroSword.type, "Espada"));
      console.log("------------------------------------------------");
      break;
    case 3:
      console.log("------------------------------------------------");
      let heroMartialArts = new Hero("Konan", 32, Type.MONK);
      console.log(
        heroMartialArts.attack(heroMartialArts.type, "Artes Marciais")
      );
      console.log("------------------------------------------------");
      break;
    case 4:
      console.log("------------------------------------------------");
      let heroNinja = new Hero("Akatsu", 21, Type.NINJA);
      console.log(heroNinja.attack(heroNinja.type, "Shuriken"));
      console.log("------------------------------------------------");
      break;
    default:
      console.log("Opção inválida. Tentar novamente?");
      let tryAgain = readline.question("s/n: ");
      exit = tryAgain === "s" ? true : false;
      break;
  }
} while (exit);
