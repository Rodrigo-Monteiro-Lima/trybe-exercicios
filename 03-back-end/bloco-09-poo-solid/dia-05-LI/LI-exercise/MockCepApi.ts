import { ICep } from './interfaces';

export default class MockCepApi implements ICep {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `Mock do endereço para o "CEP:${cep}, n°:${number}" é "mock foo"`;
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
    return `Mock do CEP para: "${address}, n°: ${number}" é "mock baz"`;
  }
}
