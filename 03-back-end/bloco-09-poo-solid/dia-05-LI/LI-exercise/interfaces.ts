export interface IAirVehicle {
  fly(): void;
}


export interface ILandVehicle {
  drive(): void;
}

export interface IFlyingVehicle extends IAirVehicle, ILandVehicle {}

export interface ICep {
  getAddressByCEP(c: string, n:number):Promise<string>,
  getCepByAddress(c: string, n:number):Promise<string>,
}
