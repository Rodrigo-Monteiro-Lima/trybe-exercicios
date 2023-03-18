import IAgenda from "./interfaces/IAgenda";
import IFutebol from "./interfaces/IFutebol";
import normas from "./normas/normasDeUso";
import Quadra from "./Quadra";

export default class QuadraFutebol extends Quadra {
  futebolNormas: IFutebol = normas.futebol;
  reservar<IFutebol>(data: Date): IAgenda<IFutebol> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return {
      protocolo,
      data,
      regras: this.futebolNormas as unknown as IFutebol,
    };
  }
}