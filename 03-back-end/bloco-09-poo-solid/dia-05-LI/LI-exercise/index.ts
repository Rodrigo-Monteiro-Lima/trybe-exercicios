import CepService from './CepService';
import FooCepAPI from './FooCepAPI';
import MockCepApi from './MockCepApi';

async function main() {
  const mockAPI = new MockCepApi();
  const cepApi = new FooCepAPI();
  const cepSvc = new CepService(mockAPI);

  console.log(
    'get address by cep',
    '->',
    await cepSvc.addressByCep('xx.xxx-xx', 10),
  );
  console.log(
    'get cep by address',
    '->',
    await cepSvc.cepByAddress('street foo, between bar and baz', 10),
  );
}

main();
