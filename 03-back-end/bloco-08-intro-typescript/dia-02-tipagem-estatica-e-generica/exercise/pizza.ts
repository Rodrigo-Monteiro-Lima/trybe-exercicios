
type Slices = 4 | 6 | 8;

interface Pizza {
  flavor: string;
  slices: Slices;
}

type Common = "Calabresa" | "Frango" | "Pepperoni";
type Vegetarian = "Marguerita" | "Palmito" | "Cogumelos";
type Sweet = "Nutella" | "Goiabada com Queijo" | "Marshmallow";

interface PizzaCommon extends Pizza {
  flavor: Common;
}

interface PizzaVegetarian extends Pizza {
  flavor: Vegetarian;
}

interface SweetPizza extends Pizza {
  flavor: Sweet;
  slices: 4;
}

class Pizza {
  constructor(flavor: string, slices: Slices) {
    this.flavor = flavor;
    this.slices = slices
  }
}

const calabresa = new Pizza('Calabresa', 8);
const marguerita = new Pizza('Marguerita', 6);
const nutella = new Pizza('Nutella', 4);


