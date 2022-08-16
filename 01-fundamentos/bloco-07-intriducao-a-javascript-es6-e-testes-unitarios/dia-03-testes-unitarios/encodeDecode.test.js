const {encode} = require('./encodeDecode');
const {decode} = require('./encodeDecode');

describe('Testar as funções encode e decode', () => {
  test('Testa se encode e decode são funções', () => {
    expect(encode).toBeDefined();
    expect(typeof encode).toEqual('function');
    expect(decode).toBeDefined();
    expect(typeof decode).toEqual('function');
  });
  test('Verifica se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });
  test('Testa se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });
  test('Testa se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('sequoia')).toBe('s2q5431');
    expect(decode('s2q5431')).toBe('sequoia');
  });
  test('Testa se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('Rodrigo').length).toBe(7);
    expect(decode('R4dr3g4').length).toBe(7);
  })
});