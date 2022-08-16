const searchEmployee = require('./bônus');

describe('A função deverá então retornar os resultados da busca pelo id para aquele funcionário e a informação consultada.', () => {
  test('Verificar se a função existe', () => {
    expect(searchEmployee).toBeDefined();
    expect(typeof searchEmployee).toBe('function');
  });
  test('Verificar se a função sum lança um erro quando o id não existem', () => {
    expect(() => searchEmployee('45690', 'lastName')).toThrow(Error);
    expect(() => searchEmployee('45690', 'lastName')).toThrowError(new Error('ID não identificada'));
  });
  test('Verificar se a função sum lança um erro quando o detail não existem', () => {
    expect(() => searchEmployee('4678-2', 'Dodds')).toThrow(Error);
    expect(() => searchEmployee('4678-2', 'Dodds')).toThrowError(new Error('Informação indisponível'))
  });
  test('Verifica se a função retorna o nome do id consultado', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
  });
  test('Verifica se a função retorna o sobrenome do id consultado', () => {
    expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs');
  });
  test('Verifica se a função retorna as especialidades do id consultado', () => {
    expect(searchEmployee('4456-4', 'specialities')).toContain('Context API', 'RTL', 'Bootstrap');
  });
});