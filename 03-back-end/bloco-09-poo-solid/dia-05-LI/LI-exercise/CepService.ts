import { ICep } from './interfaces';

class CepService {
  private readonly cepApi: ICep;

  constructor(cepApi: ICep) {
    this.cepApi = cepApi;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;
