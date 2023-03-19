import { ILandVehicle } from './interfaces';

export default class Car implements ILandVehicle {
  drive(): void {
    console.log('dirigindo o carro');
  }
}
