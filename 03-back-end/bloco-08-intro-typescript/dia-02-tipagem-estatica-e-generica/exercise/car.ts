class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  turnOn(): void {
    console.log("Carro ligado.");
  }

  turnOff(): void {
    console.log("Carro desligado.");
  }

  turn(direction: string): void {
    console.log(`Virando para a ${direction}.`);
  }

  speedUp(): void {
    console.log("Acelerando.");
  }

  speedDown(): void {
    console.log("Freiando");
  }

  stop(): void {
    console.log("Parando.");
  }

  honk(): void {
    console.log("bi bi");
  }

}

const car = new Car('volkswagen', 'prata', 4)

car.turnOn();
car.speedUp();
car.speedDown();
car.turn('esquerda')
car.speedUp();
car.speedDown();
car.turn('direita');
car.speedUp();
car.speedDown()
car.turn('direita')
car.speedUp();
car.speedDown();
car.stop();
car.speedUp();
car.speedDown();
car.turn('direita');
car.speedUp();
car.speedDown();
car.turn('esquerda');
car.speedUp();
car.speedDown();
car.turn('direita');
car.stop();