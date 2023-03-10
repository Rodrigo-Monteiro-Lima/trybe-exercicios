"use strict";
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    turnOn() {
        console.log("Carro ligado.");
    }
    turnOff() {
        console.log("Carro desligado.");
    }
    turn(direction) {
        console.log(`Virando para a ${direction}.`);
    }
    speedUp() {
        console.log("Acelerando.");
    }
    speedDown() {
        console.log("Freiando");
    }
    stop() {
        console.log("Parando.");
    }
    honk() {
        console.log("bi bi");
    }
}
const car = new Car('volkswagen', 'prata', 4);
car.turnOn();
car.speedUp();
car.speedDown();
car.turn('esquerda');
car.speedUp();
car.speedDown();
car.turn('direita');
car.speedUp();
car.speedDown();
car.turn('direita');
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
