const sum = require('./script');

describe('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
  test('Verificar se a soma de (4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('Verificar se a soma de (0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('Verificar se a função sum lança um erro quando os parâmetros são 4 e "5"', () => {
    expect(() => sum(4, '5')).toThrow(Error);
  });
  test('Verifica se a mensagem de erro é "parameters must be numbers" ', () => {
    expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
  });
});